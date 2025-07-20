import React from 'react'
import Navbar from '../components/NavBar'
import NotesList from '../features/notes/NotesList'

const Notes = () => {
  return (
    <>
      <Navbar />
      <NotesList/>
    </>
  )
}

export default Notes