import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element

// React.createElement => Object => HTMLElement(render)

// const heading = React.createElement('h1', {id: heading}, 'Namaste React 🚀'); 
// using React
// console.log(heading);

// JSX - HTML-like or XML-like syntax
const jsxHeading = <h1 id="heading"> Namaste React using JSX 🚀</h1>; // using JSX
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);