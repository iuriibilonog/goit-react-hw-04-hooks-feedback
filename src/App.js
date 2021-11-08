import { useState } from "react";
import s from "./App.module.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section/";
import Notification from "./components/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const getFeedBackOnClick = (name) => {
    switch (name) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    const PositivePercente = total > 0 ? Math.round((good / total) * 100) : 0;
    return PositivePercente;
  };

  return (
    <div className={s.App}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          getFeedBackOnClick={getFeedBackOnClick}
          options={["good", "neutral", "bad"]}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            options={{ good, neutral, bad }}
            total={countTotalFeedback}
            positiveInPercente={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
