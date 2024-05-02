import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const defaultFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("feedback")) || defaultFeedback
    );
  });

  useEffect(
    () => window.localStorage.setItem("feedback", JSON.stringify(feedback)),
    [feedback]
  );

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

  const resetFeedback = () => {
    setFeedback(defaultFeedback);
  };

  const positiveFeedback = (good) => {
    return Math.round((good / totalFeedback) * 100);
  };

  return (
    <>
      <Description />
      <Options
        feedback={feedback}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
