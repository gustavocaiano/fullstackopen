import { useState } from "react";

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const handleGood = () => {
//     setGood(good + 1);
//   };
//   const handleNeutral = () => {
//     setNeutral(neutral + 1);
//   };
//   const handleBad = () => {
//     setBad(bad + 1);
//   };

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <div>
//         <button onClick={handleGood}>good</button>
//         <button onClick={handleNeutral}>neutral</button>
//         <button onClick={handleBad}>bad</button>
//       </div>
//       <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
//     </div>
//   );
// };

// const Statistics = (props) => {
//   return (
//     <div>
//       <h1>statistics</h1>

//       <div>
//         <StatisticLine text="good" value={props.good} />
//         <StatisticLine text="neutral" value={props.neutral} />
//         <StatisticLine text="bad" value={props.bad} />
//       </div>
//       <div>
//         <h2>Additional statistics</h2>
//         <StatisticLine
//           text="all"
//           value={props.good + props.neutral + props.bad}
//         />
//         {props.good / (props.good + props.neutral + props.bad) > 0 ? (
//           <p>
//             positive{" "}
//             {(props.good / (props.good + props.neutral + props.bad)) * 100}%
//           </p>
//         ) : (
//           <p>none positive</p>
//         )};

//       </div>
//     </div>
//   );
// };
// const StatisticLine = (props) => {
//   return (
//     <div>
//       {props.value == 0 ? (
//         <div>No Feedback Given for "{props.text}"</div>
//       ) : (
//         <div>
//           <p>
//             {props.text} {props.value}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(8).fill(0));
  const [bigger, setBigger] = useState(0);

  const handleNext = () => {
    const number = Math.floor(Math.random() * 8);
    setSelected(number);
  };
  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    const maxVotesIndex = copy.indexOf(Math.max(...copy));
    setBigger(maxVotesIndex);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      {votes[selected] > 0 ? (
        <p>has {votes[selected]} votes</p>
      ) : (
        <p>no votes in this one</p>
      )}

      <div>
        <button onClick={handleNext}>next anecdote</button>
        <button onClick={handleVote}>vote</button>
      </div>
      <h2>AnecDote with most votes</h2>
      <p>{anecdotes[bigger]}</p>
      <p>has {votes[bigger]} votes </p>
    </div>
  );
};

export default App;
