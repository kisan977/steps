import React from "react";
import Button from "../Button/Button";
import Tags from "../Tags/Tags";
import TextEditor from "../TextEditor/TextEditor";
import { Progress } from "antd";

import "./AddStepForm.css";

const AddStepForm = ({
  value,
  handleChange,
  handleClick,
  handleDelete,
  tagValue,
  // progress,
  setFormValue,
  updateHandler,
}) => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  // const progressChange = () => {
  //   let progress = 0;
  //   if (text !== "") {
  //     progress += 10;
  //   }
  //   if (metrices !== "") {
  //     progress += 80;
  //   }
  //   setFormValue({ progress: progress });
  // };

  return (
    <div className="form-container">
      {/* <Progress
        strokeColor={{
          from: "#108ee9",
          to: "#87d068",
        }}
        percent={progress}
        status="active"
      /> */}
      <div className="btn_container">
        <Button onSubmit={handleClick} />
      </div>

      <form onSubmit={handleSubmitForm}>
        <div className="field">
          <input
            type="text"
            name="text"
            // onBlur={progressChange}
            value={value}
            onChange={handleChange}
            placeholder="Name *"
            className="text_field"
          />
        </div>

        <div className="tag_field">
          <label className="tag_label">Tags</label>
          <Tags tagValue={tagValue} setFormValue={setFormValue} />
        </div>
        <div className="field">
          <label className="tag_label">Description</label>
          <TextEditor setFormValue={setFormValue} />
        </div>

        <div className="textarea_field">
          <textarea
            rows="4"
            cols="50"
            value={value}
            name="metrices"
            onChange={handleChange}
            placeholder="Metrics"
            // onBlur={progressChange}
          ></textarea>
        </div>
        <div className="roles_field">
          <select name="roles" value={value} onChange={handleChange}>
            <option>Security Roles</option>
            <option>Admin</option>
            <option>Vendor</option>
            <option>User</option>
          </select>
        </div>
        <div className="btns">
          <button className="button-26" onClick={updateHandler}>
            Update
          </button>
          <button class="button-24" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStepForm;
