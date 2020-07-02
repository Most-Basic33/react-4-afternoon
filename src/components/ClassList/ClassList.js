import React, { Component } from 'react';
import axios from 'axios';


export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }
//utilize the match method from react-router-dom object
  componentDidMount() {
axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
.then(results=>{
  this.setState({
    students: results.data
  })
})
.catch(err=>console.log(err))
  }

  render() {
    const mappedStudents = this.state.students.map((student,i) =>{
      return(
        <div key={i} >
      <h3>{student.first_name} {student.last_name } </h3>
        </div>
      )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        { mappedStudents }

      </div>
    )
  }
}