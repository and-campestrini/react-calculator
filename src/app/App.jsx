import React from 'react'
import Frame from '../frame/frame'
import './App.css'

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="text-center">React Calculator</h1>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-5">
						<Frame/>
					</div>
				</div>
			</div>
		)
	}
}

export default App
