import React from 'react'
import Header from './Header'

const Course = (props) => {
    return (
        <div>
            <Header name={props.course.name} />
            <Content p={props.course.parts} />
            <Total p={props.course} />
        </div>
    )
}

const Content = (props) => {
    const rows = () => props.p.map(part =>
        <Part
            key={props.p.id}
            p={part}
        />
    )

    return (
        <div>
            {rows()}
        </div>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.p.name} {props.p.exercises}
        </p>
    )
}


const Total = (props) => {
    const sum = props.p.parts.reduce(
        (s, p) => s + p.exercises
        , 0
    )
    return (
        <p>
            yhteensä {sum} tehtävää
        </p>
    )
}


export default Course
