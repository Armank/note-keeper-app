import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";

console.log(notes);

function App(){
    // const [titles, setTitltes] = React.useState([]);
    // const [contents, setContents] = React.useState([]);
    const [notes, setNotes] = React.useState([]);

    function addNote(newNote){
        setNotes((prevNotes)=>{
            return [...prevNotes, newNote]
        });
    }

    function deleteNote(id){
        console.log(id);
        setNotes((prevNotes) => {
            return prevNotes.filter((note, index)=>{
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notes.map((note, index) => (
                <Note 
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onClicked={deleteNote}
                />
            ))}
            <Footer />    
        </div>
    );
}

export default App;