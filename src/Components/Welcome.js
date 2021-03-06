import React, { Component } from 'react';

class Welcome extends Component {
	render() {
		return (
			<div class="row">
				<div class="section">
					<h1 class="blue-grey-text text-darken-3">Volunteering Made Easy</h1>
					<div class="section">
						<img
							src="https://tinyurl.com/y9l6bz6x"
							alt="volunteering"
							height="300"
							width="300"
						/>
						<img
							src="https://tinyurl.com/yac8bz57"
							alt="volunteering"
							height="300"
							width="300"
						/>
						<img
							src="https://tinyurl.com/yc874nrm"
							alt="volunteering"
							height="300"
							width="300"
						/>
					</div>
					<h3 class="blue-grey-text text-darken-2">
						{' '}
						Help out your community by signing up to participate in pop-up
						volunteering opportunities. Click helpUp in the nav bar to start.
					</h3>
				</div>
				<div class="index-quote col s6">
					<h5 class="grey-text">
						Individually, we are one drop. Together, we are an ocean. &mdash;
						Ryunosuke Satoro
					</h5>
				</div>
			</div>
		);
	}
}

export default Welcome;
