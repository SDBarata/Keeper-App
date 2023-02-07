import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea({ onAdd }) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  };

  function submitNote(event) {
    onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  };

  function expandArea() {
    setExpanded(true);
  };

  return (
     <div>
      <form className="create-note">
        {isExpanded && <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title} />}
        <textarea
          onClick={expandArea}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows= {isExpanded ? 3 : 1}
          value={note.content} />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
        
        </form>
    </div>
)}

export default CreateArea;