const Blog = () => {
  return (
    <div className="container mt-4 ">
      <div className="card mb-3">
        <div className="card-header">
          <b>Q:1. What is the purpose of react router?</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <p className="card-text">
            <b>React router:</b>React Router is an API for React applications.
            React Router uses dynamic routing.
            <br />
            When we say dynamic routing, we mean routing that takes place as
            your app is rendering, not in a configuration or convention outside
            of a running app. That means almost everything is a component in
            React Router
            <br />
            React Router, and dynamic, client-side routing, allows us to build a
            single-page web application with navigation without the page
            refreshing as the user navigates. React Router uses component
            structure to call components, which display the appropriate
            information.
          </p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">
          <b>Q:2.How does context api work in react?</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <p className="card-text">
            <b>Context API:</b>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
            <br />
            React.createContext() is all you need. It returns a consumer and a
            provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the "store" and be
            the parent of all the components that might need that store.
            Consumer as it so happens is a component that consumes and uses the
            state
          </p>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">
          <b>Q:3. What is the purpose of useRef hook?</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <p className="card-text">
            <b>useRef hook:</b>
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
            <br />
            The useRef Hook is a function that returns a mutable ref object
            whose .current property is initialized with the passed argument
            (initialValue). The returned object will persist for the full
            lifetime of the component.
            <br />A unique way to implement a useRef hook is to use it to store
            values instead of DOM references. These values can either be a state
            that does not need to change too often or a state that should change
            as frequently as possible but should not trigger full re-rendering
            of the component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
