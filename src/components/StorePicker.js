import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	render(){
		return (
			<form className="store-selector">
				<input type="text" placeholder="Store Name" 
				defaultValue={ getFunName() } required/>
				<button type="submit">Visit Store -></button>
			</form>

		);
	}
}

export default StorePicker;