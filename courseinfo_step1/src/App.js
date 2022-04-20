// import logo from './logo.svg';
// import './App.css';
const Header = (props) => {
  // const course = 'Half Stack application development'
  console.log("Header", props)
  console.log("I am in the Header section!")
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log("I'm a Part", props)
  return (
    <div>
      <p>
        {props.part} {props.exercises}
        {<p>'This is just a line to take up some space.'</p>}
      </p>
    </div>
  )
}

const Content = (props) => {
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  // const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React-prop',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
   name: 'State of a component',
  exercises: 14
  }
  console.log("Content", props)
  console.log("I am in the content section!")
  return (
    <div>
      
        <Part part={part1.name} exercises={part1.exercises}/>
        
      
        <Part part = {part2.name} exercises = {part2.exercises} />
     
        <Part part = {part3.name} exercises = {part3.exercises} />
     
    </div>
  )

}



const Total = (props) => {
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  console.log("Total", props)
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
      
    </div>
    
  )

}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React-App',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
   name: 'State of a component',
  exercises: 14
  }
  console.log("App")
  return (
    <div>
      <Header course={course}/>
      {/* <Header /> */}
      {/* <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/> */}
     
      <Content />
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      <Total exercises1={part1.exercises} exercises2={part2.exercises}  exercises3={part3.exercises}/>
      {/* <Total part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises}/> */}

      {/* <Total /> */}
    
    </div>
  );
}

export default App;
