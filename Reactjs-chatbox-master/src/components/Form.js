import React from 'react';
//import smiley from '../images/smiley/1.png';

class Form extends React.Component {

	state =  {
		length : this.props.length
	}

	// Functions
	createMessage(e) {
		e.preventDefault();

		const message = {
			message : this.message.value,
			pseudo : this.props.pseudo
		}

		this.props.addMessage(message);

		this.messageForm.reset();
		const length = this.props.length;
		this.setState({length});
	}

	counter(e)  {
		const length = this.props.length - this.message.value.length;
		console.log(length);
		this.setState({length});
	}

	render() {

		/*let smileys = ['wood', 'sun', 'moon', 'sea'].map( (name, index) => {
		            return <img key={index} className="img-responsive" alt="" src={require(`./icons/${name}.png`)} />
		        } );*/

		return (
			<form 
			onSubmit={e => this.createMessage(e)}
			ref={(input) => this.messageForm = input}
			className="form"
			>
				<textarea 
					onChange={e => this.counter(e)}
					ref={(input) => this.message = input}
					maxLength={this.state.length}
					className="text-area"
				>
				</textarea>
				<div className="smiley">
					
				</div>
				<div className="info">{this.state.length}</div>
				<button className="btn-send-message btn btn-default ">Send</button>
			</form>
		)
	}
}

export default Form