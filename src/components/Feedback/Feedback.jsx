import s from "./Feedback.module.css";

const Feedback = ({ feedback: { bad, good, neutral } }) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>Good: {good}</li>
      <li className={s.item}>Neutral: {neutral}</li>
      <li className={s.item}>Bad: {bad}</li>
      <li className={s.item}>Total: </li>
      <li className={s.item}>Positive: </li>
    </ul>
  );
};

export default Feedback;
