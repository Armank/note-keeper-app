import React from "react"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){
    const [note, setNote] = React.useState({title:"", content:""});
    const [isClicked, setIsClicked] = React.useState(false);

    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function expandArea(){
        setIsClicked(true);
    }

    return(
        <div>
            <form className="create-note">
                {isClicked && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
                <textarea 
                    onClick={expandArea}
                    onChange={handleChange} 
                    name="content" 
                    placeholder="Take a note..." 
                    rows={!isClicked ? "1" : "3"} 
                    value={note.content} />
                <Zoom in={isClicked}>
                    <Fab onClick={(event)=>{
                            event.preventDefault();
                            props.onAdd(note);
                            setNote({title:"", content:""});
                        }}>
                    <AddIcon />
                    </Fab>
                </Zoom>
                
            </form>
        </div>
    );
}

export default CreateArea;