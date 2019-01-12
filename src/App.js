import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Banner/>
				<About/>
			</div>
		);
	}
}

export default App;
