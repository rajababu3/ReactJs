import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {
	constructor(){
		super();
		//Below line is to use this.state so bind this to the class
		this.addFish = this.addFish.bind(this);
		this.state = {
			fishes: {},
			order: {}
		};
	}
	addFish(fish){
		const fishes = {...this.state.fishes};
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;
		this.setState({ fishes });
	}

	render(){
		return (
			<div className="catch-of-the-day">
			<div className="menu">
				<Header tagline="Sea Food is Love!"/>
			</div>
				<Order/>
				<Inventory addFish = {this.addFish}/>
			</div>
		)
	}
}

export default App;