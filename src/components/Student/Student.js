import React, { Component } from 'react';
import axios from 'axios';
 

export default class Student extends Component {
  constructor(props) {
    super(props);
this.state = {
  studentInfo: {},
}
  }
//utilizing the match attribute passed fown from react-router
componentDidMount(){
axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
.then(results =>{
  this.setState({
    studentInfo: results.data

  })
})
.catch(err=>console.log(err))
}
 goBack=()=>{
   this.props.history.goBack()
 }
  render() {
    return (
      <div className="box">
        <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
        <h3>{this.state.studentInfo.grade}</h3>
        <h3>{this.state.studentInfo.email}</h3>

     <h3 onClick={this.goBack} className='return' >Return Back To Class List </h3> 

    
      </div>
    )
  }
}