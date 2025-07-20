import React, { useState } from 'react'

const NoteForm = ({ dispatch }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  return (
      <form className='space-y-4 m-20 border-2 rounded-3xl p-3'>
          <input
              type='text'
              placeholder='Note title'
              className='w-full p-3 border border-gray-300 text-white dark:border-gray-700 rounded-md dark:bg-gray-900'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
          />
          <textarea
              placeholder='Write your note here...'
              rows={5}
              className='w-full p-3 border border-gray-300 text-white dark:border-gray-700 rounded-md dark:bg-gray-900'
              onChange={(e) => setContent(e.target.value)}
              value={content}
          />
          <button
              type='submit'
              className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition'
              onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "ADD", payload: { title, content, id: Date.now() } });
                  setTitle("");
                  setContent("");
              }}>
              Add Note
          </button>
      </form>
  );
}

export default NoteForm