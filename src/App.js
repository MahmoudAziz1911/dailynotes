import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import MainNavigation from './components/layouts/main-navigation';
import 'react-toastify/dist/ReactToastify.css';
const HomePage = lazy(() => import('./components/Home-Page'));
const AddNote = lazy(() => import('./components/Add-Note'));
const EditNote = lazy(() => import('./components/Edit-Note'));
const NotePage = lazy(() => import('./components/NotePage'));

function App() {
  const [note, setNote] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState('#fff');
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editColor, setEditColor] = useState('#fff');
  const [isModalShown, setIsModalShown] = useState(false);
  const history = useNavigate();

  const showModalHandler = () => {
    setIsModalShown(true)
  }
  const closeModalHandler = () => {
    setIsModalShown(false);
  };

  const selectedColor = color => {
    setColor(color)
  }

  const handleNoteSubmit = () => {
    const id = note.length > 0 ? Math.random(note[note.length - 1].id + 1) : Math.random(1 * 10)
    const dateTime = new Date().toLocaleString('en-GB')
    const newNote = {
      id: id,
      title: title,
      description: description,
      color: color,
      time: dateTime
    }
    const noteList = [...note, newNote];
    setNote(noteList);
    localStorage.setItem("notes", JSON.stringify(noteList));
    console.log(noteList);

  }

  const handleFormSubmit = (e, index) => {
    e.preventDefault();
    if (!title && !description) return;
    handleNoteSubmit();
    setTitle("")
    setDescription("")
    setIsModalShown(false)
    toast("your note is added !")
  };

  const handleDeleteNote = (id) => {
    const deleteNote = note.filter((note) => note.id !== id)
    setNote(deleteNote)
    localStorage.setItem("notes", JSON.stringify(deleteNote))
    history("/")
    toast.error("Item deleted...")
  }

  const handleUpdateNote = (id) => {
    const updatedTime = format(new Date(), 'MMMM dd, yyyy pp')
    const updateNote = {
      id: id,
      title: editTitle,
      description: editDescription,
      color: editColor,
      time: updatedTime
    }
    const updateObject = note.map((note) => (note.id === id ? { ...updateNote } : note));
    setNote(updateObject);
    localStorage.setItem("notes", JSON.stringify(updateObject));
    setEditTitle("");
    setEditDescription("");
    history("/")
    toast.success("Your Note Updated..")
  }

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <MainNavigation />
        <ToastContainer
          position="top-right"
          autoClose={3000}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                note={note}
                onClick={showModalHandler}
                DeleteNote={handleDeleteNote}
                updateNote={handleUpdateNote}
              />
            }>

          </Route>
          <Route
            path="/edit/:id"
            element={
              <EditNote
                note={note}
                editTitle={editTitle}
                editDescription={editDescription}
                setEditTitle={setEditTitle}
                setEditDescription={setEditDescription}
                editColor={editColor}
                setEditColor={setEditColor}
                isModalShown={isModalShown}
                closeModal={closeModalHandler}
                handleUpdateNote={handleUpdateNote}
              />
            }
          ></Route>
          <Route
            path="/notes/:id"
            element={
              <NotePage note={note} />
            }
          >

          </Route>
        </Routes>
        <AddNote
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          isModalShown={isModalShown}
          closeModal={closeModalHandler}
          handleFormSubmit={handleFormSubmit}
          selectedColor={selectedColor}
        />

      </Suspense>
    </>
  );
}

export default App;
