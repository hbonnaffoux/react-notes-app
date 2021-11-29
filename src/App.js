import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text:  "This is my first note",
    date : "23/04/1994"
  },
  {
    id: nanoid(),
    text:  "This is my second note",
    date : "23/04/1994"
  },
  {
    id: nanoid(),
    text:  "This is my third note",
    date : "23/04/1994"
  },
  {
    id: nanoid(),
    text:  "This is my fourth note",
    date : "23/04/1994"
  }

]); 
  
  return (
    <div className="container">
        <NotesList notes={notes}/>
    </div>
  );
};


export default App;