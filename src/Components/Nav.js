import React, { Component } from 'react'

class Nav extends Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper green darken-3">
					<a href="/jobs" className="brand-logo yellow-text text-lighten-4">
						help Up
					</a>
					<a href="#" data-activates="mobile-demo" className="button-collapse">
						<i className="material-icons">menu</i>
					</a>
				</div>
			</nav>
		)
	}
}

export default Nav
