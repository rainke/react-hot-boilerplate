import React, {Component} from 'react';

export default class CommentForm extends Component {
	handleSubmit(e) {
		e.preventDefault();
		this.props.onCommentSubmit(
			{author: this.refs.auther.value, text: this.refs.text.value}
		);
		this.refs.auther.value = '';
		this.refs.text.value = ''
	}

	render() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
		        <input type="text" placeholder="Your name" ref="auther"/>
		        <input type="text" placeholder="Say something..." ref="text"/>
		        <input type="submit" value="提交" />
		    </form>
		)
	}
}