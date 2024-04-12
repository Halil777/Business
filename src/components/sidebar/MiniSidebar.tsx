import { FC, useState } from "react";
import { Stack, IconButton, Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";

const MiniSidebar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      <Stack
        width="100%"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={3}
      >
        <img
          onClick={() => {
            navigate("/");
            setShowNavbar(false);
          }}
          src="/images/logo.png"
          style={{ width: "95px", height: "64px" }}
        />
        <IconButton
          onClick={() => setShowNavbar(!showNavbar)}
          sx={{
            background: "#363636",
            color: "#B6B6B6",
            borderRadius: "4px",
            "&:hover": {
              background: "#363636",
            },
          }}
        >
          {!showNavbar ? <MenuIcon /> : <CloseIcon sx={{ color: "#FFF083" }} />}
        </IconButton>
      </Stack>
      {showNavbar && (
        <Box
          sx={{
            background: "#363636",
            borderRadius: "8px",
            padding: 1,
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            mt: 7,
          }}
        >
          <Box
            onClick={() => {
              navigate("/about");
              setShowNavbar(false);
            }}
            sx={{
              background:
                location.pathname === "/about" ? "#222222" : "#3e3e3e",
              color: location.pathname === "/about" ? "#FFF083" : "#B6B6B6",
              borderRadius: "8px 8px 0px 0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "78px",
              gap: "3px",
            }}
          >
            <PeopleAltOutlinedIcon />
            <Typography>{t("sidebar.about")}</Typography>
          </Box>
          <Box
            onClick={() => {
              navigate("/portfolio");
              setShowNavbar(false);
            }}
            sx={{
              background:
                location.pathname === "/portfolio" ? "#222222" : "#3e3e3e",
              color: location.pathname === "/portfolio" ? "#FFF083" : "#B6B6B6",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "78px",
              gap: "3px",
            }}
          >
            <WorkOutlineOutlinedIcon />
            <Typography>{t("sidebar.portfolio")}</Typography>
          </Box>
          <Box
            onClick={() => {
              navigate("/services");
              setShowNavbar(false);
            }}
            sx={{
              background:
                location.pathname === "/services" ? "#222222" : "#3e3e3e",
              color: location.pathname === "/services" ? "#FFF083" : "#B6B6B6",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "78px",
              gap: "3px",
            }}
          >
            <SettingsIcon />
            <Typography>{t("sidebar.services")}</Typography>
          </Box>
          <Box
            onClick={() => {
              navigate("/contact");
              setShowNavbar(false);
            }}
            sx={{
              background:
                location.pathname === "/contact" ? "#222222" : "#3e3e3e",
              color: location.pathname === "/contact" ? "#FFF083" : "#B6B6B6",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "78px",
              gap: "3px",
            }}
          >
            <MailIcon />
            <Typography>{t("sidebar.contact")}</Typography>
          </Box>
          <Box
            // onClick={() => {
            //   navigate("/contact");
            //   setShowNavbar(false);
            // }}
            sx={{
              background:
                location.pathname === "/contact" ? "#222222" : "#3e3e3e",
              color: location.pathname === "/contact" ? "#FFF083" : "#B6B6B6",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "78px",
              gap: "3px",
            }}
          ></Box>
        </Box>
      )}
    </>
  );
};

export default MiniSidebar;
