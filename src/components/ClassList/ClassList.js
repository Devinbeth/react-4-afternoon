import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then((res) => {
      this.setState({students: res.data})
    });
  }

  render() {
    let studentList = this.state.students.map((e, i) => {
      return (
        <Link to={`/students/${e.id}`} key={i}>
          <h3>{`${e.first_name} ${e.last_name}`}</h3>
        </Link>
      );
    });
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {studentList}
        <Link to='/'>
          <button className='btn'>Back</button>
        </Link>
      </div>
    )
  }
}