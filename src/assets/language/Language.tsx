import { Box, Stack, Typography } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import { radius } from "../../common/style/commonStyle";
import ruFlag from "/images/Flag_of_Russia 2.png";
import enFlag from "/images/Group 79 2.png";
import tmFlag from "/images/Flag_of_Turkmenistan 2.png";
import { useTranslation } from "react-i18next";

const Language: FC<{ setShowLanguage: (show: boolean) => void }> = ({
  setShowLanguage,
}) => {
  const { t, i18n } = useTranslation();
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLanguageSelect = (selectedLanguage: string) => {
    setShowLanguage(false);
    console.log(selectedLanguage);
  };

  const changeLanguage = (lng: string, selectedLanguage: string) => {
    i18n.changeLanguage(lng);
    handleLanguageSelect(selectedLanguage);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowLanguage(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowLanguage]);

  return (
    <Box
      ref={containerRef}
      sx={{
        background: "#383838",
        borderRadius: radius,
        p: screenHeight >= 900 ? 3 : 2,
      }}
    >
      <Stack direction={"row"} spacing={2}>
        <Stack
          spacing={screenHeight >= 900 ? 2 : 1}
          sx={{ cursor: "pointer" }}
          onClick={() => changeLanguage("tm", "Turkmenistan")}
        >
          <img
            src={tmFlag}
            alt="tmFlag"
            style={{ width: screenHeight >= 900 ? "" : "35px" }}
          />
          <Typography
            sx={{
              color: "#B6B6B6",
              fontWeight: 500,
              fontSize: screenHeight >= 900 ? "" : "13px",
            }}
          >
            {t("TKM")}
          </Typography>
        </Stack>
        <Stack
          spacing={screenHeight >= 900 ? 2 : 1}
          sx={{ cursor: "pointer" }}
          onClick={() => changeLanguage("ru", "Russian")}
        >
          <img
            src={ruFlag}
            alt="ruFlag"
            style={{ width: screenHeight >= 900 ? "" : "35px" }}
          />
          <Typography
            sx={{
              color: "#B6B6B6",
              fontWeight: 500,
              fontSize: screenHeight >= 900 ? "" : "13px",
            }}
          >
            {t("RUS")}
          </Typography>
        </Stack>
        <Stack
          spacing={screenHeight >= 900 ? 2 : 1}
          sx={{ cursor: "pointer" }}
          onClick={() => changeLanguage("en", "England")}
        >
          <img
            src={enFlag}
            alt="enFlag"
            style={{ width: screenHeight >= 900 ? "" : "35px" }}
          />
          <Typography
            sx={{
              color: "#B6B6B6",
              fontWeight: 500,
              fontSize: screenHeight >= 900 ? "" : "13px",
            }}
          >
            {t("ENG")}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Language;
