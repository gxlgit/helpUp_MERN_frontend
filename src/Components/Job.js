import React, { Component } from 'react'
import axios from 'axios'

class Job extends Component {

  state = {
      creator: 'test',
      name: 'name',
      date: 'date',
      location: 'location',
      description: 'desc',
      time: 'time',
      img: '',
      volunteers: []
  }



  componentDidMount() {
    console.log('job componentDidMount');
    axios
      //.get(`http://localhost:6060/jobs`)
      .get(`https://helpup-api.herokuapp.com/jobs/${this.props.match.params.jobName}`)
      .then(response => {
        console.log('job query data');
        console.log(response.data)
        this.setState(prevState => (response.data))
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      // <div onLoad="initialize()">
      <div>
        <div className="section">
          <div className="row section">
            {this.state.img &&  <div className="">
                            <img src={this.state.img} alt="volunteering activity" height="200" width="200"/>
                            </div> }

            <h3>{this.state.name}</h3>
            <div className=" light-blue-text text-darken-1">
              <div>
                {this.state.description}
              </div>
              <div>
                {this.state.date} @  {this.state.time}
              </div>
            </div>
            {this.state.creator ?
              <div>{this.state.location}</div> :
              // <div id="job-map"></div>
              <div>
                <div id="job-location">{this.state.location}</div>
                <a href={`mailto:${this.state.creator}`}>
                  <div className="chip">
                      <i className="close material-icons">email</i>
                      Contact
                  </div>
                </a>
              </div>
            }
        </div>
      </div>
    </div>
    )
  }
}


export default Job
