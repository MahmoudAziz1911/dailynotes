import { Box, Card, CardContent, Typography } from "@mui/material";
import { useParams } from "react-router-dom"

const NotePage = ({ note }) => {
  const { id } = useParams();
  const post = note.find((note) => (note.id).toString() === id);
  return (
    <Box sx={{ p: 3, bgcolor: "#f9f9fe", height: "100vh" }}>
      <Card sx={{ maxWidth: 800, margin: "auto", textAlign: "center" }}>
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{ fontSize: "26px", fontFamily: "revert", fontWeight: "700" }}>
            <span style={{ color: "#ff4c60", marginRight: "0.5rem" }}>#</span>{post.title}
          </Typography>
          <Typography variant="overline" sx={{ fontSize: "15px", fontWeight: "600", color: "#9f9b9f" }}>
            {post.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default NotePage