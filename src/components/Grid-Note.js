import { Grid, Typography } from '@mui/material'
import ViewNote from './notes/ViewNote';

const GridNote = ({ note, DeleteNote, updateNote }) => {
    return (
        <>
            <Grid container spacing={2} py={5}>
                {note.length > 0 ? (
                    <>
                        {note.map((note) => (
                            <Grid key={note.id} item md={3} xs={12}>
                                <ViewNote note={note} DeleteNote={DeleteNote} updateNote={updateNote} />
                            </Grid>
                        ))}
                    </>

                ) : (
                    <Typography sx={{ alignItems: "center", fontSize: "20px", fontWeight: 500 }} variant="overline">
                        There are no notes founded...
                    </Typography>
                )}
            </Grid>
        </>
    )
}

export default GridNote