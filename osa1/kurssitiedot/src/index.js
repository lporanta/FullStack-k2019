import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part p={props.p.parts[0]} />
            <Part p={props.p.parts[1]} />
            <Part p={props.p.parts[2]} />
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>
                {props.p.name} {props.p.exercises}
            </p>
        </div>
    )
}

const Total = (props) => {
        const sum = (p) => {
            let s = 0
            p.forEach(element => {
                s+=element.exercises
            });
            return s
        }
        return (
        <div>
            <p>
              yhteensä {sum(props.p.parts)} tehtävää
            </p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
          {
            name: 'Reactin perusteet',
            exercises: 10
          },
          {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
          },
          {
            name: 'Komponenttien tila',
            exercises: 14
          }
        ]
      }

    return (
        <div>
            <Header p={course} />
            <Content p={course} />
            <Total p={course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))