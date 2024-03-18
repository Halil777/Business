import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { Box, Button } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import song from "../../assets/mp3/music1.mp3";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  boxShadow: 24,
  width: 300,
  p: 4,
  borderRadius: "6px",
  display: "flex",
  justifyContent: "center",
};

const MusicPlayer: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [playing, setPlaying] = useState(true); // Set to true by default

  useEffect(() => {
    if (playing) {
      setOpen(false); // Close the modal if music starts playing
    }
  }, [playing]);

  const togglePlay = () => {
    setPlaying(true);
  };

  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            startIcon={<MusicNoteIcon />}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              background: "#222222",
              "&:hover": { background: "#222222" },
            }}
            onClick={togglePlay}
          >
            Play
          </Button>
          {playing && <audio src={song} controls autoPlay />}
        </Box>
      </Modal>
    </>
  );
};

export default MusicPlayer;
