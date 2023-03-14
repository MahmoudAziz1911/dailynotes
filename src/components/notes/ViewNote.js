import { CardActions, CardContent, Card, CardHeader, Divider, IconButton, Typography } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ViewNote = ({ note, DeleteNote }) => {
  return (
    <>
      <Card sx={{ bgcolor: `${note.color}` }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography sx={{ textTransform: "capitalize", fontSize: "20px", fontFamily: "monospace" }}>
              {note.title}
            </Typography>
          }
          subheader={
            <Typography variant="subtitle2">{note.time}</Typography>
          }
        />
        <Divider sx={{ borderStyle: 'dashed' }} />
        <CardContent>
          <Typography variant="overline" color="text.secondary">
            {note.description.slice(0, 110)}{note.description.length < 110 ? "" : ".... Read More"}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions disableSpacing>
          <IconButton component={ Link } to={`edit/${note.id}`}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => DeleteNote(note.id)}>
            <Delete />
          </IconButton>
          <IconButton component={ Link } to={`notes/${note.id}`}>
            <RemoveRedEye />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}

export default ViewNote

