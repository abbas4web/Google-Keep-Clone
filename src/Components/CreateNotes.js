import React from "react";
import "./CreateNotes.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";

const CreateNotes = (props) => {
  const [note, newNote] = useState({
    title: "",
    content: "",
  });

  const [errorTitle, newError] = useState();
  const [errorContent, newErrorContent] = useState();

  const ErrorTitle = "Please Give A Title";
  const ErorrContent = "Please Write Any Note";

  // Handling Input Events
  const inputEventHandler = (event) => {
    const { name, value } = event.target;

    newNote((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  // Button Handler
  const addNotes = () => {
    if (note.title === "") {
      newError(ErrorTitle);
    } else if (note.content === "") {
      newErrorContent(ErorrContent);
      newError("");
    } else {
      props.passNotes(note);
      newError("");
      newErrorContent("");
      newNote({
        title: "",
        content: "",
      });
    }
  };

  return (
    <div className="main-notes__div">
      <div className="cards">
        <form>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={inputEventHandler}
            placeholder="Title"
            autoComplete="off"
          />

          <p className="error"> {errorTitle} </p>
          <br />
          <input
            type="text"
            name="content"
            value={note.content}
            onChange={inputEventHandler}
            className="textarea"
            placeholder="Write Note"
            autoComplete="off"
          />
          <p className="error"> {errorContent} </p>
          <br />
        </form>

        <Tooltip title="Add Note">
          <Button className="btnnn" onClick={addNotes}>
            <AddIcon />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default CreateNotes;
