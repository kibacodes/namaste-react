import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", {id: "parent"}, [
    
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "This is Namaste React 🚀"), 
        React.createElement("h2", {}, "ASDBJFDBVWjuBVFJWBFVJW")]),

    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I am an h1"), 
        React.createElement("h2", {}, "I am an h2")])

]);



console.log(parent);

const myRoot = ReactDOM.createRoot(document.querySelector("#root"));

myRoot.render(parent);