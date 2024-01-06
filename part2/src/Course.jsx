import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = (props) => {
  const { course } = props;

  return (
    <div>
      <Header name={course.name} />

      <Content parts={course.parts} />

      <h3>
        total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)}{" "}
        exercises
      </h3>
    </div>
  );
};

export default Course;
