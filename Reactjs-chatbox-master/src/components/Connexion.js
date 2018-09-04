import React from 'react';
import {PropTypes} from 'prop-types';

class Connexion extends React.Component {

	// functions
	goChat(e) {
		e.preventDefault();
		const pseudo = this.pseudoInput.value;

		// switch URL
		this.props.history.push(`/pseudo/${pseudo}`);
	}

	render() {
		return (
			<div 
				onSubmit={e => this.goChat(e)} className="bloc-connexion">

				<form className="bloc-connexion__connexion">

					<div className="bloc-connexion__login">
						<label>Enter your pseudo</label>
						<input 
							ref={(input) => {this.pseudoInput = input}}
							type="text"
							placeholder="Enter your pseudo" />
					</div>
					<p className="bloc-connexion__btn">
						<button className="btn btn-default" type="submit">Go chat !
						</button>
					</p>
				</form>

			</div>
		)
	}
	static contextTypes =  {
		router : PropTypes.object.isRequired
	}
}


export default Connexion


/*
In 15.5, instead of accessing PropTypes from the main React object, 
install the prop-types package and import them.
https://reactjs.org/blog/2017/04/07/react-v15.5.0.html#migrating-from-react.proptypes

Don't use transitionTo (error : not a function), instead :
this.props.history.push();
thanks stackoverflow ;)
*/