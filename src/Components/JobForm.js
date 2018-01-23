
import React, {Component } from 'react'


class JobForm extends Component {

  render () {
    return (
      <div className="container card-panel yellow lighten-4">
        <form name= 'job' onSubmit={this.props.addJob}>
            <h4>Add New <span className="brand-logo green-text text-darken-3">helpUp</span></h4>
            <div className="input-field hide">
              <label for="job-name">Creator</label>
              <input className='validate' type="text"  id="job-creator" value="creator email address"/>
            </div>

            <div className="input-field">
              <label for="job-name">Title</label>
              <input className='validate' type="text"   id="job-name" onChange={this.props.handleNameInput}/>
            </div>
            <div className="input-field">
              <label for="job-description">Description</label>
              <input className='validate' type="text" id="job-description" onChange={this.props.handleDescriptionInput}/>
            </div>

            <div className="input-field">
              <label for="job-date">Date</label>
              <input type="text" className="datepicker"  id="job-date" onChange={this.props.handleDateInput}/>
            </div>
            <div className="input-field">
              <label for="job-time">Start Time</label>
              <input type="text" className="timepicker"  id="job-time" onChange={this.props.handleTimeInput}/>
            </div>
            <div className="input-field">
              <label for="job-location">Location</label>
              {/* <div id="job-map"></div> */}
              {/* <div> */}
                 <input className='validate' type="text"  id="job-location" onChange={this.props.handleLocationInput}/>
                {/* <input id="job-location" type="textbox" name="job[location]" value="Washington, DC"/>
                <input type="button" value="Find" onclick="codeAddress()"/> */}
              {/* </div> */}

            </div>
            <div className="input-field">
              <label for="job-img">User Photo URL</label>
              <input type="text" id="job-img" onChange={this.props.handleImgInput}/>
            </div>
            <button className="btn waves-effect waves-light green darken-3" type="submit" name="action">Submit
            </button>
          </form>
        </div>
    )//end return
  }//end render()
}//end JobForm

export default JobForm
