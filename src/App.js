import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateNotes from "./Components/CreateNotes";
import Note from "./Components/Note";
import { useState } from "react";

const App = () => {
  const [addItems, setItems] = useState([]);

  const addNote = (note) => {
    setItems((preVal) => {
      return [...preVal, note];
    });
  };

  // Delete Notes Handler
  const deleteNotes = (id) => {
    setItems((oldData) =>
      oldData.filter((val, index) => {
        return index !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNotes passNotes={addNote} />

      {addItems.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            deleteNotes={deleteNotes}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
