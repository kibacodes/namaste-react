import React from 'react';
import ReactDOM from 'react-dom/client';

const title = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
    </h1>
)

const number = 100;
const HeadingComponent = () => (
    <div id="container">
        {title}
        <h2>{number + 200}</h2>
        {console.log('JS is here')}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);