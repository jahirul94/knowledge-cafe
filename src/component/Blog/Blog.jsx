import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='q-container'>
             <div className='question-sec'>
                  <h3 className='question'>Q_1 : Props vs state </h3>
                  <p className='ans'>Ans : Props and state are both important concepts in React for managing and updating data in components. Props are used to pass data from parent to child components and are immutable, while state is used to manage data within a component itself and is mutable. Props allow for a top-down approach to data management, while state allows components to manage their own data and update the UI accordingly. Understanding the difference between props and state is important for building scalable and maintainable React applications.</p>
             </div>
             <div className='question-sec'>
                  <h3 className='question'>Q_2 : How does useState work ? </h3>
                  <p className='ans'>Ans : The useState hook in React is a function that allows functional components to have state. It takes an initial value as an argument and returns an array with the current state value and a function to update the state value. This allows for dynamic content based on the current state, with any updates to the state value triggering a re-render of the component. The useState hook can be used multiple times in a component to manage multiple pieces of state independently.</p>
             </div>
             <div className='question-sec'>
                  <h3 className='question'>Q_3 : Purpose of useEffect other than fetching data ?</h3>
                  <p className='ans'>Ans : The useEffect hook in React is not limited to data fetching and can be used for a variety of purposes such as performing side effects, optimizing rendering, and interacting with third-party libraries or global state. By utilizing this hook, you can add more functionality to your components and create a more dynamic and interactive user interface.</p>
             </div>
             <div className='question-sec'>
                  <h3 className='question'>Q_4 : How Does React work ? </h3>
                  <p className='ans'>Ans : React is a declarative JavaScript library for building user interfaces. It works by using components, which are reusable and composable pieces of code that represent parts of the UI. React also uses a virtual DOM to efficiently update the actual DOM and minimize unnecessary updates, resulting in a faster and more responsive UI.When building a react application, you define components that represent different parts of the UI and can have their own state. When the state of a component changes, react re-renders the component and any child components that depend on its state.React also provides hooks that allow you to add state and other features to functional components, making them more powerful and reusable. By mastering the use of react, you can create efficient, maintainable, and scalable user interfaces for your applications.</p>
             </div>
        </div>
    );
};

export default Blog;


