import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/banner';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Banner/>
			</div>
		);
	}
}

export default App;
