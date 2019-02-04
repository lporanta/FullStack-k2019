import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'
import Header from './components/Header'

const Courses = (props) => {
    const rows = () => props.p.map(course =>
        <Course
            key={props.p.id}
            course={course}
        />
    )
    return (
        <div>
            <Header name="Opetusohjelma" />
            {rows()}
        </div>
    )
}

const App = () => {
    const courses = [
        {
            name: 'Half Stack -sovelluskehitys',
            id: 1,
            parts: [
                {
                    name: 'Reactin perusteet',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Tiedonvälitys propseilla',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'Komponenttien tila',
                    exercises: 14,
                    id: 3
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 2,
                    id: 1
                },
                {
                    name: 'Middlewaret',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <div>
            <Courses p={courses} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))