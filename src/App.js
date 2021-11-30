import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "23/04/1994",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "23/04/1994",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "23/04/1994",
    },
    {
      id: nanoid(),
      text: "This is my fourth note",
      date: "23/04/1994",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote]; // this line creates a new array instead of updating the old one
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
   const newNotes =  notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
