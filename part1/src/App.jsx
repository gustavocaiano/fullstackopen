import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>

      <div>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
      </div>
      <div>
        <h2>Additional statistics</h2>
        <StatisticLine
          text="all"
          value={props.good + props.neutral + props.bad}
        />
        {props.good / (props.good + props.neutral + props.bad) > 0 ? (
          <p>
            positive{" "}
            {(props.good / (props.good + props.neutral + props.bad)) * 100}%
          </p>
        ) : (
          <p>none positive</p>
        )};

      </div>
    </div>
  );
};
const StatisticLine = (props) => {
  return (
    <div>
      {props.value == 0 ? (
        <div>No Feedback Given for "{props.text}"</div>
      ) : (
        <div>
          <p>
            {props.text} {props.value}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;

