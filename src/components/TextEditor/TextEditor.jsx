import React, { useEffect, useState } from "react";
import "./TextEditor.css";

import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css";

const TextEditor = ({ setFormValue }) => {
  const [content, setContent] = useState([]);
  const theme = "snow";

  const modules = {
    toolbar: [["bold", "italic", "underline"]],
  };

  const formats = ["bold", "italic", "underline"];

  const { quill, quillRef } = useQuill({ theme, modules, formats });

  useEffect(() => {
    if (content.length > 0) {
      setFormValue((prevState) => {
        return { ...prevState, description: content };
      });
    }
  }, [content]);

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        const quillContent = quill.getContents();
        setContent([...quillContent.ops, ...content]);
      });
    }
  }, [quill]);

  return (
    <div style={{ width: 550, height: 100 }} className="text-editor">
      <div ref={quillRef} />
    </div>
  );
};

export default TextEditor;
