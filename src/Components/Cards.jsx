import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);


  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(props.courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      //console.log(allCourses)
      return allCourses;
    }
    else
    {
        return props.courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      { getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          ></Card>
        );
      })}
    </div>
  );
}
export default Cards;
