import React, { useRef } from 'react'
import { Button, TextField, Card, CardActions, Checkbox } from '@mui/material'

import ModalView from "./UI/Modal"

const AddNote = ({
  handleFormSubmit,
  title,
  setTitle,
  description,
  setDescription,
  selectedColor,
  isModalShown,
  closeModal
}) => {
  const inputRef = useRef();
  return (
    <>

      {isModalShown && (
        <ModalView>
          <Card sx={{ maxWidth: 350, margin: "auto" }} elevation={0}>
            <form onSubmit={handleFormSubmit}>
              <TextField
                type="text"
                name="title"
                label="Title Note"
                ref={inputRef}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                size="small" variant="standard" margin="normal" fullWidth />
              <TextField
                type="text"
                name="description"
                label="Description"
                ref={inputRef}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={3}
                size="small" variant="standard" margin="normal" fullWidth />

              <Checkbox onClick={() => { selectedColor('#FEC971') }} sx={{ color: "#FEC971", '&.Mui-checked': { color: '#FEC971' } }} />
              <Checkbox onClick={() => { selectedColor('#FE9B71') }} sx={{ color: "#FE9B71", '&.Mui-checked': { color: '#FE9B71' } }} />
              <Checkbox onClick={() => { selectedColor('#B592FD') }} sx={{ color: "#B592FD", '&.Mui-checked': { color: '#B592FD' } }} />
              <Checkbox onClick={() => { selectedColor('#00D4FE') }} sx={{ color: "#00D4FE", '&.Mui-checked': { color: '#00D4FE' } }} />
              <Checkbox onClick={() => { selectedColor('#E3EE8E') }} sx={{ color: "#E3EE8E", '&.Mui-checked': { color: '#E3EE8E' } }} />

              <CardActions>
                <Button type="submit"
                  sx={{ my: 2, ":hover": { bgcolor: "#222" }, bgcolor: "#a20401" }}
                  variant="contained" disableElevation onClick={(e) => inputRef.current.focus()}>
                  Add Note
                </Button>
                <Button size="small" variant="danger" onClick={closeModal}>Cancel</Button>
              </CardActions>
            </form>
          </Card>
        </ModalView>
      )}
    </>
  )
}

export default AddNote