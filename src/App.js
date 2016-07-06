import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {CommentList, Comment, CommentForm} from './components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './style.css';

let FancyCheckbox = (props)=>{
    var { checked, ...other } = props;
    console.log(other);
    return <div>FancyCheckbox</div>
}


export default class App extends Component {

    static defaultProps = {
        checked: true,
        a:'a',
        c:'c',
        transition: 'transition'
    }

    state = {
        data:[],
        items: ['hello', 'world', 'click', 'me']
    }

    componentDidMount() {

        $.get('/test.json').done((data) => {
            this.setState({data: data});
        })
    }
    componentDidUpdate() {
        // ReactDOM.findDOMNode(this.refs.myInput).focus()
        this._input.focus();
    }

    handleCommentSubmit(comment){
        let newData = this.state.data;
        newData.push(comment);
        this.setState({data: newData});
    }
    handleRemove(i) {
        var newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }

    render() {
        var items = this.state.items.map((item, i) => {
            return (
                <div key={item} onClick={this.handleRemove.bind(this, i)}>
                  {item}
                </div>
            );
        });
        return (
            <div>
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm author={this.state.author} onCommentSubmit={this.handleCommentSubmit.bind(this)} />
                <FancyCheckbox {...this.props}/>
                <input type="text" ref={(c)=>this._input=c}/>
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
