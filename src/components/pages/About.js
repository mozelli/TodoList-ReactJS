import React from 'react';

function About() {
  return (
    <React.Fragment>
      <div className="jumbotron mt-3">
        <h1 className="display-4">About</h1>
        <hr className="my-4" />
        <p className="lead">
          This is the TodoList app v1.0.0.
        </p>
        <p className="lead">
          It is part of a React Crash course.
        </p>
        <p className="lead">
          <a href="https://www.youtube.com/watch?v=sBws8MSXN7A">
            Link to the course in Youtube
          </a>
        </p>
      </div>
    </React.Fragment>
  );
}

export default About;
