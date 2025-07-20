import React, { useReducer } from "react";
import EmptyNotes from "./EmptyNotes";
import NoteCard from "./NoteCard";
import NoteForm from "./NoteForm";
import { initialState, notesReducer } from "../../hooks/notesReducer";

const NotesList = () => {

    const [state, dispatch] = useReducer(notesReducer, initialState);

    return (
        <>
            {state.notes.length === 0 ? (
                <EmptyNotes />
            ) : (
                state.notes.map((note, ind) => (
                    <NoteCard
                        key={ind}
                        title={note.title}
                        content={note.content}
                        dispatch={dispatch}
                        id={note.id}
                    />
                ))
            )}
            <NoteForm dispatch={dispatch} />
        </>
    );
};

export default NotesList;
