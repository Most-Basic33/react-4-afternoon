import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }
  goBack=()=>{
    this.props.history.goBack()
  }
  //utilize the match method from react-router-dom object
  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(results => {
        this.setState({
          students: results.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const mappedStudents = this.state.students.map((student, i) => {
      return (

        <Link to={`/student/${student.id}`} key={i}>
          <h3>{student.first_name} {student.last_name}</h3>
        </Link>

      )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedStudents}
        <h3 onClick={this.goBack} className='return' >Return Back To Home </h3> 

      </div>
    )
  }
}