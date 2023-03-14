import React, { useState, useEffect, lazy } from "react";
import { Container, Typography, FormControl, TextField, InputAdornment, Box, Card, Stack, Avatar, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add"

const GridNote = lazy(() => import("./Grid-Note"));


const HomePage = ({ onClick, note, DeleteNote, updateNote }) => {
    const [search, setSearch] = useState(note);
    const [showClearIcon, setShowClearIcon] = useState("none");

    useEffect(() => {
        setSearch(note)
    }, [note])

    const handleSearchInput = (e) => {
        if (e.target.value.trim().length === 0) return setSearch(note);
        const ArraySearch = note.filter((note) => (
            note.title.toLowerCase().includes(e.target.value.toLowerCase().replace(/\s+/g, ' ').trim()) || note.description.toLowerCase().includes(e.target.value.toLowerCase().replace(/\s+/g, ' ').trim())
        ));
        setSearch(ArraySearch);
        setShowClearIcon(e.target.value === "" ? "none" : "flex")
    }

    const handleClearSearch = (e) => {
        setSearch(note)
    }
    return (
        <Container>
            <Box pt={6}>
                <Card sx={{ maxWidth: 345 }} onClick={onClick}>
                    <Stack direction="column" spacing={2} my={4}>
                        <Avatar sx={{ bgcolor: "#a18080", margin: "auto", width: 60, height: 60 }}>
                            <AddIcon />
                        </Avatar>
                        <Button
                            sx={{
                                textTransform: "unset",
                                borderRadius: 5,
                                color: "#a18080",
                                padding: "7px 8px",
                                fontSize: "18px",
                                '&:hover': {
                                    bgcolor: "transparent"
                                }
                            }}
                        >
                            Add Note
                        </Button>
                    </Stack>
                </Card>
            </Box>
            {note && note.length ? (
                <>
                    <Box sx={{
                        position: { xs: "unset", sm: "absolute" },
                        mt: { xs: 5, sm: "2px" },
                        top: '10rem',
                        left: '50%',
                    }}>
                        <FormControl>
                            <TextField
                                size="small"
                                fullWidth
                                variant="outlined"
                                placeholder="Search Note..."
                                onChange={(e) => { handleSearchInput(e) }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment
                                            position="end"
                                            style={{ display: showClearIcon }}
                                            onClick={handleClearSearch}
                                        >
                                            <ClearIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </FormControl>

                    </Box>
                    <GridNote note={search} onClick={onClick} DeleteNote={DeleteNote} updateNote={updateNote} />
                </>
            ) : (
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }} variant="overline">
                    No Founded Notes !
                </Typography>
            )}

        </Container>
    )
}

export default HomePage