import { useEffect } from 'react'
import { Button, TextField, Card, CardActions, Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom';

const EditNote = ({
  note,
  handleUpdateNote,
  editTitle,
  setEditTitle,
  editDescription,
  setEditDescription,
  setEditColor
}) => {

  const { id } = useParams();
  const post = note.find((note) => (note.id).toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditDescription(post.description);
      setEditColor(post.color)
    }
  }, [post, setEditTitle, setEditDescription, setEditColor])

  return (
    <Box sx={{ p: 5, bgcolor: "#f9f9fe", height: "100vh" }}>
      <Typography sx={{ textAlign: "center", fontSize: "22px", fontFamily: "monospace" }}>
        Update Note
      </Typography>
      <Card sx={{ maxWidth: 500, px: 5, margin: "auto", marginTop: "46px" }}>
        <form onSubmit={(e) => e.preventDefault()} px={4}>
          <TextField
            type="text"
            label="Note Id"
            disabled
            value={post.id}
            InputProps={{ readOnly: true }}
            size="small" variant="standard" margin="normal" fullWidth />
          <TextField
            type="text"
            name="title"
            label="Title Note"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            size="small" variant="standard" margin="normal" fullWidth />
          <TextField
            type="text"
            name="description"
            label="Description"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            multiline
            cols={28}
            rows={6}
            size="small" variant="standard" margin="normal" fullWidth />
          <CardActions>
            <Button type="submit"
              sx={{ my: 2, ":hover": { bgcolor: "#222" }, bgcolor: "#a20401" }}
              variant="contained" disableElevation onClick={() => handleUpdateNote(post.id)}>
              Update
            </Button>
          </CardActions>
        </form>
      </Card>
    </Box>
  )
}

export default EditNote