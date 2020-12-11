import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
) 

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [currentVote, setVote] = useState(0)

  const selectedToValue = props => {
    setSelected(props)
  }

  const vote = props  => {
   let points = [...votes]
   points[selected] = (points[selected] + 1) 
   votes = [...points]
   console.log (votes)
   setVote(votes[selected])
  }

  const BestAnecdote = () => { 
    let i = votes.indexOf(best)
    return (
    <h3>{anecdotes[i]}</h3>
    )
  }
  let best = Math.max.apply(Math, votes);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h3>{props.anecdotes[selected]}</h3>
      <>Press for new random anecdote  </>
      <Button handleClick={() => selectedToValue(Math.floor((Math.random() * 5) + 1))} text="Random anecdote" />
      <p> Number of votes for this anecdote:   {votes[selected]} <Button handleClick={() => vote(1)} text="Vote" /></p>
      
     <br></br>

     <> Anecdote with most votes:</>
     <BestAnecdote/>
     <>With {best} votes. </> 

    

    </div>
  )
}

let votes= new Array(6).fill(0);

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)