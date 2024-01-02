import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const jsxHeading = <h1 id="heading"> Namaste React using JSX 🚀</h1>; // using JSX
console.log(jsxHeading);

// React Functional Component
const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);