## What is JSX, and why is it used?
JSX(javascript xml) is a javascript syntax extension which allows to write html within the js file. It is used to make react components easy to understand and more readable.

## What is the difference between State and Props?
State is managed inside the component, whereas props are passed into the component from its parent. State is mutable, whereas props are immutable.

## What is the useState hook, and how does it work?
The useState hook is a function that lets you add state to functional components in React. It works by returning an array containing two values: the current state value and a setter function to update it. When the setter function is called with a new value, React re-renders the component, and the new state value is available on the next render.

## How can you share state between components in React?
We can share state between components in react by lifting the states up to the nearest common ancestor

## How is event handling done in React?
Event handling in react is done by passing a function as an event handler.
