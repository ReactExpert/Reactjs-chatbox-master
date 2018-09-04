import React from 'react';
import Message from './Message';
import Form from './Form';
import {base} from '../base';
import { CSSTransitionGroup } from 'react-transition-group';
import '../style/SASS/animation/animation.css'

class App extends React.Component {

	state = {
		messages : {}
	}

	componentWillMount() {
		this.ref = base.syncState('/', {
			context: this,
			state: 'messages'
		});
	}

	componentDidUpdate() {
		// scroll
		this.messages.scrollTop = this.messages.scrollHeight ;
	}

	addMessage = message => {
		const messages = {...this.state.messages};
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = message;
		Object.keys(messages).slice(0, -15).map(key => messages[key] = null);
		this.setState({messages});
	}

	isUser = (pseudo) => {
		return pseudo === this.props.match.params.pseudo
	}

	render() {

		const messages = Object
		.keys(this.state.messages)
		.map(key => <Message key={key} details={this.state.messages[key]} isUser={this.isUser} />);
		
		return (
			<div className="bloc-chat">
				<div>
					<div className="messages" ref={input => this.messages = input}>
					<CSSTransitionGroup 
					component="div"
					className="message"
					transitionName="message"
					transitionEnterTimeOut={200}
					transitionLeaveTimeOut={200}
					>
						{messages}
					</CSSTransitionGroup>
					</div>
					<Form 
						addMessage={this.addMessage} 
						pseudo={this.props.match.params.pseudo}
						length="140"
						className="send-message"
					/>
				</div>
			</div>
		)
	}
}

export default App

/*
this.props.match.params.pseudo to get user pseudo instead of
this.props.params.pseudo (=> undefined)
*/