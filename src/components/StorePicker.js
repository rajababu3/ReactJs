import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	goToStore(event){
		event.preventDefault();
		const storeId = this.storeInput.value;
		this.context.router.transitionTo(`/store/${storeId}`);
	}
	render(){
		return (
			<form className="store-selector" onSubmit={ (e)=> this.goToStore(e)}>
				<input type="text" placeholder="Store Name" 
				defaultValue={ getFunName() } ref={ (input) => {this.storeInput = input}} required/>
				<button type="submit">Visit Store -></button>
			</form>

		);
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.Object
}

export default StorePicker;