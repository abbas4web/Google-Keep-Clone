import React from "react";
import "./Note.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Tooltip from "@material-ui/core/Tooltip";

const Note = (props) => {
  const deleteHandler = () => {
    props.deleteNotes(props.id);
  };

  return (
    <>
      <div className="main">
        <div className="main-note__div">
          <h3> {props.title} </h3>
          <p> {props.content} </p>
          <Tooltip title="Delete Note">
            <button className="btn" onClick={deleteHandler}>
              <DeleteOutlineIcon className="delete" />
            </button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Note;
