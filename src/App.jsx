import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback = Object.values(feedback).reduce(
    (acum, value) => acum + value,
    0
  );
  return (
    <>
      <Description />
      <Options
        feedback={feedback}
        updateFeedback={updateFeedback}
      />
      {totalFeedback > 0 ? <Feedback feedback={feedback} /> : <Notification />}
    </>
  );
}

export default App;
