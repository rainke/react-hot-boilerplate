import React, { Component } from 'react';
import {Comment} from '../index.js';

export default class CommentList extends Component {
	render () {

		var commentNodes = this.props.data.map(function(comment, i){
			return (
				<Comment author={comment.author} key={i}>
		          	{comment.text}
		        </Comment>
			);
		});

		return (
			<div>{commentNodes} </div>
		)
	}
}