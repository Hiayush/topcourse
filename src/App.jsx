import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import { apiUrl, filterData } from "./Data.jsx";
import Cards from "./Components/Cards";
import { useEffect } from "react";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState("All");

  const fetchData = async () => {
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();

      setCourses(output.data);
      //console.log(output.data)
    } catch (err) {
      toast.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex-col flex bg-blue-500">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-bgDark2">
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        <Cards courses={courses} category={category}></Cards>
      </div>
    </div>
  );
};
export default App;
