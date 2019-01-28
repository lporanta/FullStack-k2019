import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistics = props => {
    if (props.g + props.n + props.b == 0) {
        return (
            <div>
                <h2>statistiikka</h2>
                <p>Ei yhtään palautetta annettu</p>
            </div>
        )
    }
    return (
        <div>
            <h2>statistiikka</h2>
            <Statistic text="hyvä" stat={props.g} />
            <Statistic text="neutraali" stat={props.n} />
            <Statistic text="huono" stat={props.b} />
            <Statistic text="yhteensä" stat={(props.g + props.n + props.b)} />
            <Statistic text="keskiarvo" stat={((props.g - props.b) / (props.g + props.b + props.n))} />
            <Statistic text="positiivisia" stat={(props.g / (props.g + props.n + props.b) * 100 + " %")} />
      </div>
    )
}

const Statistic = props => {
    return (
        <p>{props.text} {props.stat}</p>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setToGood = good => {
        setGood(good)
    }
    const setToNeutral = neutral => {
        setNeutral(neutral)
    }
    const setToBad = bad => {
        setBad(bad)
    }
    const getAll = () => {
        return { good, bad, neutral }
    }



    return (
        <div>
            <h1> anna palautetta</h1>
            <Button handleClick={() => setToGood(good + 1)} text="hyvä" />
            <Button handleClick={() => setToNeutral(neutral + 1)} text="neutraali" />
            <Button handleClick={() => setToBad(bad + 1)} text="huono" />
            <Statistics b={bad} g={good} n={neutral} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)