import React, { useEffect, useState } from "react";
import "./Tags.css";
const Tags = ({ tagValue, setFormValue }) => {
  const [tags, setTags] = useState([]);

  const handleKeydown = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  };

  useEffect(() => {
    if (tags.length > 0) {
      setFormValue((prevState) => {
        return { ...prevState, tagValue: tags };
      });
    }
  }, [tags]);

  console.log(tags);

  const removeTags = (index) => {
    setTags(tags.filter((el, i) => i !== index));
  };

  return (
    <div className="tags-input-container">
      {tags.map((tag, index) => {
        return (
          <div className="tag-item" key={index}>
            <span className="text">{tag}</span>
            <span className="close" onClick={() => removeTags(index)}>
              &times;
            </span>
          </div>
        );
      })}
      <input
        type="text"
        onKeyDown={handleKeydown}
        className="tag-input"
        placeholder="+tag"
        name="tags"
      />
    </div>
  );
};

export default Tags;
