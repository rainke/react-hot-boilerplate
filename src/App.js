import React, { Component } from 'react';
import $ from 'jquery';
import {CommentList, Comment, CommentForm} from './components';




export default class App extends Component {
    state = {
        data:[]
    }

    componentDidMount() {

        $.get('/test.json').done((data) => {
            this.setState({data: data});
        })
    }

    handleCommentSubmit(comment){
        let newData = this.state.data;
        newData.push(comment);
        this.setState({data: newData});
    }

    render() {

        return (
            <div>
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm author={this.state.author} onCommentSubmit={this.handleCommentSubmit.bind(this)} />
            </div>
        );
    }
}
