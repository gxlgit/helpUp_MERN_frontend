import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import Jobs from './Components/Jobs'
import Job from './Components/Job'
import Nav from './Components/Nav'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<Nav />
				</header>
				<main className="container">
					<Switch>
						<Route exact path="/jobs" component={Jobs} />

						<Route path="/jobs/:jobName" render={props => <Job {...props} />} />
						{/* <Route path={'/jobs/:jobName'} component={Job} /> */}
						<Route path="/*" render={() => <Redirect to="/Jobs" />} />
					</Switch>
				</main>
			</div>
		)
	}
}

export default App
