import { FC } from "react";
import { Box } from "@mui/material";
import LanguageModal from "../../assets/language/LanguageModal";

const Home: FC = () => {
  return (
    <div>
      <Box
        sx={{
          background: "#E9E9E9",
          borderRadius: "8px",
        }}
      >
        <LanguageModal />
      </Box>
    </div>
  );
};

export default Home;
