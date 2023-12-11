
const parent = React.createElement("div", {id: "parent"}, [
    
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I am an h1"), 
        React.createElement("h2", {}, "I am an h2")]),

    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I am an h1"), 
        React.createElement("h2", {}, "I am an h2")])

]);



const heading = React.createElement("h1", {id: 'heading-1'}, "Hi from React!");

console.log(parent);

const myRoot = ReactDOM.createRoot(document.querySelector("#root"));

myRoot.render(parent);