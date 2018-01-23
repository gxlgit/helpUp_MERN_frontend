import React, { Component } from 'react'
import axios from 'axios'
import JobForm from './JobForm'

class Job extends Component {
	state = {
		creator: '',
		name: '',
		date: '',
		location: '',
		description: '',
		time: '',
		img: '',
		volunteers: []
	}

	handleNameInput = e => {
		let name = e.target.value
		this.setState(prevState => ({
			name: name
		}))
	}

	handleDateInput = e => {
		let date = e.target.value
		this.setState(prevState => ({
			date: date
		}))
	}

	handleTimeInput = e => {
		let time = e.target.value
		this.setState(prevState => ({
			time: time
		}))
	}
	handleLocationInput = e => {
		let location = e.target.value
		this.setState(prevState => ({
			location: location
		}))
	}
	handleImgInput = e => {
		let img = e.target.value
		this.setState(prevState => ({
			img: img
		}))
	}
	handleDescriptionInput = e => {
		let description = e.target.value
		this.setState(prevState => ({
			description: description
		}))
	}

	updateJob = e => {
		e.preventDefault()
		//this is where you would add form validation
		axios
			.put(
				`https://helpup-api.herokuapp.com/jobs/${
					this.props.match.params.jobName
				}`,
				{
					creator: this.state.creator,
					name: this.state.name,
					date: this.state.date,
					location: this.state.location,
					description: this.state.description,
					time: this.state.time,
					img: this.state.img,
					volunteers: []
				}
			)
			.then(response => {
				console.log(response)
				this.setState(prevState => response)
			})
			.catch(err => console.log(err))
	}

	deleteJob = e => {
		e.preventDefault()
		console.log('deleteJob')
		axios
			.delete(
				`https://helpup-api.herokuapp.com/jobs/${
					this.props.match.params.jobName
				}`
			)
			.then(response => {
				//should redirect to /jobs
				this.props.history.push('/jobs')
			})
			.catch(err => console.log(err))
	}

	componentDidMount() {
		console.log('job componentDidMount')
		axios
			//.get(`http://localhost:6060/jobs`)
			.get(
				`https://helpup-api.herokuapp.com/jobs/${
					this.props.match.params.jobName
				}`
			)
			.then(response => {
				console.log('job query data')
				console.log(response.data)
				this.setState(prevState => response.data)
			})
			.catch(err => console.log(err))
	}

	render() {
		return (
			// <div onLoad="initialize()">
			<div>
				<div className="section">
					<div className="row section">
						{this.state.img && (
							<div className="">
								<img
									src={this.state.img}
									alt="volunteering activity"
									height="200"
									width="200"
								/>
							</div>
						)}

						<h3>{this.state.name}</h3>
						<div className=" light-blue-text text-darken-1">
							<div>{this.state.description}</div>
							<div>
								{this.state.date} @ {this.state.time}
							</div>
						</div>
						{this.state.creator ? (
							<div>{this.state.location}</div>
						) : (
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
						)}
					</div>
				</div>
				<JobForm
					title="update "
					jobFunction={this.updateJob}
					deleteJob={this.deleteJob}
					handleNameInput={this.handleNameInput}
					handleDescriptionInput={this.handleDescriptionInput}
					handleDateInput={this.handleDateInput}
					handleTimeInput={this.handleTimeInput}
					handleImgInput={this.handleImgInput}
					handleLocationInput={this.handleLocationInput}
				/>
			</div>
		)
	}
}

export default Job
