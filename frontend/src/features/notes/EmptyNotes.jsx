import React from "react";
import NoteForm from "./NoteForm";
const EmptyNotes = () => {
    return (
        <div className='text-center py-16 text-gray-800 dark:text-gray-500'>
            <div className='text-5xl mb-4'>📝</div>
            <h2 className='text-xl font-bold mb-2'>No notes yet</h2>
            <p className='text-sm font-semibold mb-6'>
                Start jotting down your thoughts, plans, or ideas.
            </p>
            
        </div>
    );
};

export default EmptyNotes;
