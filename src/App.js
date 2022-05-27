import React, { useState, useEffect } from "react";
import AddStepForm from "./components/AddStepForm/AddStepForm";
import AddedSteps from "./components/AddedSteps/AddedSteps";
import "./App.css";
import "antd/dist/antd.css";

const App = () => {
  const [nameArr, setNameArr] = useState([]);

  const [formValue, setFormValue] = useState([
    {
      text: "",
      metrices: "",
      roles: "",
      tagValue: [],
      description: [],
      // progress: 0,
    },
  ]);

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem("text", formValue.text);
    localStorage.setItem("metrices", formValue.metrices);
    localStorage.setItem("roles", formValue.roles);
    localStorage.setItem("tagValue", formValue.tagValue);
    localStorage.setItem("description", JSON.stringify(formValue.description));

    setNameArr((prevState) => {
      return [...prevState, formValue.text];
    });
  };

  const getArr = JSON.parse(localStorage.getItem("nameArr"));
  useEffect(() => {
    if (nameArr.length > 0) {
      const found = nameArr.some((item) => getArr && getArr.indexOf(item) >= 0);
      if (getArr && !found) {
        const thisArray = [...getArr, ...nameArr];
        localStorage.setItem("nameArr", JSON.stringify(thisArray));
        return;
      } else {
        localStorage.setItem("nameArr", JSON.stringify(nameArr));
      }
    }
  }, [nameArr, getArr]);

  useEffect(() => {
    if (getArr && getArr.length > 0) {
      setNameArr((prevState) => {
        return [...getArr];
      });
    }
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    const deleteitem = nameArr.pop();
    const deleteArra = nameArr.filter((item) => item !== deleteitem);
    console.log(deleteArra);
    setNameArr(() => {
      return [...deleteArra];
    });
  };

  const updateHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="header">
        <h2 className="main_title">Steps</h2>
      </div>

      <div className="horizontal_line" />
      <AddStepForm
        value={(formValue.text, formValue.metrices, formValue.roles)}
        // progress={formValue.progress}

        handleChange={handleChange}
        handleClick={handleClick}
        handleDelete={handleDelete}
        tagValue={formValue.tagValue}
        setFormValue={setFormValue}
        updateHandler={updateHandler}
      />
      <AddedSteps nameArr={nameArr} />
    </div>
  );
};

export default App;
