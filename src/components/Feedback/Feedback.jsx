import s from "./Feedback.module.css";

const Feedback = ({
  feedback: { bad, good, neutral },
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>Good: {good}</li>
      <li className={s.item}>Neutral: {neutral}</li>
      <li className={s.item}>Bad: {bad}</li>
      <li className={s.item}>Total: {totalFeedback}</li>
      <li className={s.item}>Positive: {positiveFeedback(good)}%</li>
    </ul>
  );
};

export default Feedback;
