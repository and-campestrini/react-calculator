import React from 'react'
import Frame from '../frame/frame'
import './App.css'

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<header>
					<h1 className="App-title">React Calculator</h1>
				</header>

				<Frame/>
			</div>
		)
	}
}

export default App
