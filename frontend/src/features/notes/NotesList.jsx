import React, { useEffect, useReducer } from "react";
import EmptyNotes from "./EmptyNotes";
import NoteCard from "./NoteCard";
import NoteForm from "./NoteForm";
import { initialState, notesReducer } from "../../hooks/notesReducer";

const getAllNotes = () => {
    try {
        const stored = JSON.parse(localStorage.getItem("notes"));
        return Array.isArray(stored) ? stored : [];
    } catch {
        return [];
    }
};
const NotesList = () => {
    const [state, dispatch] = useReducer(notesReducer, initialState);

    useEffect(() => {
        const notesFromStorage = getAllNotes();
        dispatch({ type: "INIT_NOTES", payload: notesFromStorage });
    }, []);

    useEffect(() => {
        if (state.hasInitialized) {
            localStorage.setItem("notes", JSON.stringify(state.notes));
        }
    }, [state.notes, state.hasInitialized]);
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
