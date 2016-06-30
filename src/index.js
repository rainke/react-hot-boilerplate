import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];
ReactDOM.render(<App data={data} url="/test.json"/>, document.getElementById('root'));
