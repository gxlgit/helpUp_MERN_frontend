import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import JobForm from './JobForm'

class Jobs extends Component {
	state = {
		jobs: [],

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

	addJob = e => {
		e.preventDefault()
		console.log('addJob')
		//this is where you would add form validation
		axios
			.post(
				'https://helpup-api.herokuapp.com/jobs',
				//.post(`http://localhost:6060/jobs`,
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
				console.log('response')
				console.log(response)
				let jobArrayCopy = this.state.jobs.slice()
				jobArrayCopy.push(response.data)
				this.setState(prevState => ({ jobs: jobArrayCopy }))
			})
			.catch(err => console.log(err))
	}

	componentDidMount() {
		console.log('componentDidMount')
		axios
			//.get(`http://localhost:6060/jobs`)
			.get('https://helpup-api.herokuapp.com/jobs')
			.then(response => {
				console.log(response.data)
				this.setState(prevState => ({ jobs: response.data }))
			})
			.catch(err => console.log(err))
	}


	render() {
		let jobs = this.state.jobs.map((currJob, index) => {
			return (
				<div key={index} className="job">
					<h3>
						<Link to={`/jobs/${currJob.name}`}>{currJob.name}</Link>
					</h3>
					<div>{currJob.description}</div>
				</div>
			)
		})

		return (
			<div>
				{jobs}
				<JobForm
					title="add new "
					jobFunction={this.addJob}
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

export default Jobs
