import { FC, useState, useEffect } from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";

interface SizeMap {
  [key: string]: {
    width?: string;
  };
}

export type ServiceData = {
  id: number;
  attributes: {
    title: string;
    short_description: string;
    description: string | null;
    index: number;
    url: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    icon: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          provider_metadata: Record<string, unknown>;
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          blurhash: string;
        };
      };
    };
  };
};

type ServiceCardsProps = {
  data1: ServiceData;
  data2: ServiceData;
  data3: ServiceData;
  data4: ServiceData;
};

const imgWidth: SizeMap = {
  lg: {
    width: "60px",
  },

  md: {
    width: "60px",
  },
  sm: {
    width: "40px",
  },
  xs: {
    width: "30px",
  },
};

const ServiceCards: FC<ServiceCardsProps> = ({
  data1,
  data2,
  data3,
  data4,
}) => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [isFirstCardVisible, setIsFirstCardVisible] = useState(true);
  const [isSecondCardVisible, setIsSecondCardVisible] = useState(true);
  const [isThirdCardVisible, setIsThirdCardVisible] = useState(true);
  const [isFourthCardVisible, setIsFourthCardVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let width;
  if (screenHeight >= 900) {
    width = "lg";
  } else if (screenHeight >= 600) {
    width = "md";
  } else if (screenHeight >= 400) {
    width = "sm";
  } else {
    width = "xs";
  }

  const handleCardClick = (id: string) => {
    switch (id) {
      case "firstCard":
        setIsSecondCardVisible(!isSecondCardVisible);
        break;
      case "secondCard":
        setIsFirstCardVisible(!isFirstCardVisible);
        break;
      case "thirdCard":
        setIsFourthCardVisible(!isFourthCardVisible);
        break;
      case "fourthCard":
        setIsThirdCardVisible(!isThirdCardVisible);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid container spacing={2}>
            {isFirstCardVisible && (
              <Grid
                sx={{ zIndex: isSecondCardVisible ? 0 : 100 }}
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <Box
                  id="firstCard"
                  sx={{
                    background: isSecondCardVisible ? "#828282" : "#3E3E3E",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                    gap: 3,
                  }}
                  onClick={() => handleCardClick("firstCard")}
                >
                  <Stack
                    width="100%"
                    spacing={5}
                    justifyContent="flex-start"
                    direction="row"
                    alignItems="center"
                  >
                    <img
                      // src={
                      //   isSecondCardVisible
                      //     ? `http://95.85.121.153:1337${data1.attributes.icon?.data?.attributes?.url}`
                      //     : "/images/Frame 81.png"
                      // }
                      src="images/Frame 81.png"
                      style={{
                        width: screenHeight >= 900 ? "167px" : "98px",
                      }}
                      alt="Frame 80.png"
                    />
                    <Typography
                      sx={{
                        color: isSecondCardVisible ? "#E9E9E9" : "#fff083",
                        fontSize: "32px",
                        fontWeight: 700,
                      }}
                    >
                      {data1.attributes.title}
                    </Typography>
                  </Stack>
                  {isSecondCardVisible ? null : (
                    <Typography
                      sx={{
                        color: "#FFF083",
                        fontSize: screenHeight >= 900 ? "28px" : "18px",
                        lineHeight: screenHeight >= 900 ? "48px" : "30px",
                        fontWeight: 500,
                      }}
                    >
                      {data1.attributes.short_description}
                    </Typography>
                  )}
                </Box>
              </Grid>
            )}
            {data2 && isSecondCardVisible && (
              <Grid
                sx={{ zIndex: isFirstCardVisible ? 0 : 100 }}
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <Box
                  id="secondCard"
                  sx={{
                    background: isFirstCardVisible ? "#828282" : "#3E3E3E",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                    gap: 3,
                    zIndex: isFirstCardVisible ? 0 : 1000,
                  }}
                  onClick={() => handleCardClick("secondCard")}
                >
                  <Stack
                    width="100%"
                    spacing={5}
                    justifyContent="flex-start"
                    direction="row"
                    alignItems="center"
                  >
                    <img
                      src="/images/Frame 81.png"
                      style={{
                        width: screenHeight >= 900 ? "167px" : "98px",
                      }}
                      alt="Frame 80.png"
                    />
                    <Typography
                      sx={{
                        color: isFirstCardVisible ? "#E9E9E9" : "#fff083",
                        fontSize: "32px",
                        fontWeight: 700,
                      }}
                    >
                      {data2.attributes.title}
                    </Typography>
                  </Stack>
                  {isFirstCardVisible ? null : (
                    <Typography
                      sx={{
                        color: "#FFF083",
                        fontSize: screenHeight >= 900 ? "28px" : "18px",
                        lineHeight: screenHeight >= 900 ? "48px" : "30px",
                        fontWeight: 500,
                      }}
                    >
                      {data2.attributes.short_description}
                    </Typography>
                  )}
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>

        <Stack
          sx={{
            position: "absolute",
            width: "100%",
            display: "flex",
            mt: screenHeight >= 900 ? 24 : 15.3,
            alignItems: "center",
            ml: -0.5,
            justifyContent: "center",
          }}
        >
          <img
            src="/images/Rectangle 14.png"
            style={{ ...imgWidth[width], zIndex: 10 }}
            alt="Rectangle 14"
          />
        </Stack>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid container spacing={2}>
            {isThirdCardVisible && data3 && (
              <Grid
                sx={{ zIndex: isFourthCardVisible ? 0 : 100 }}
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <Box
                  id="thirdCard"
                  sx={{
                    background: isFourthCardVisible ? "#828282" : "#3E3E3E",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                    gap: 3,
                    zIndex: isFourthCardVisible ? 0 : 1000,
                  }}
                  onClick={() => handleCardClick("thirdCard")}
                >
                  <Stack
                    width="100%"
                    spacing={5}
                    justifyContent="flex-start"
                    direction="row"
                    alignItems="center"
                  >
                    <img
                      src="/images/Frame 81.png"
                      style={{
                        width: screenHeight >= 900 ? "167px" : "98px",
                      }}
                      alt="Frame 80.png"
                    />
                    <Typography
                      sx={{
                        color: isFourthCardVisible ? "#E9E9E9" : "#fff083",
                        fontSize: "32px",
                        fontWeight: 700,
                      }}
                    >
                      {data3.attributes.title}
                    </Typography>
                  </Stack>
                  {isFourthCardVisible ? null : (
                    <Typography
                      sx={{
                        color: "#FFF083",
                        fontSize: screenHeight >= 900 ? "28px" : "18px",
                        lineHeight: screenHeight >= 900 ? "48px" : "30px",
                        fontWeight: 500,
                      }}
                    >
                      {data3.attributes.short_description}
                    </Typography>
                  )}
                </Box>
              </Grid>
            )}
            {isFourthCardVisible && data4 && (
              <Grid
                sx={{ zIndex: isThirdCardVisible ? 0 : 100 }}
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <Box
                  id="fourthCard"
                  sx={{
                    background: isThirdCardVisible ? "#828282" : "#3E3E3E",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                    gap: 3,
                    zIndex: isThirdCardVisible ? 0 : 1000,
                  }}
                  onClick={() => handleCardClick("fourthCard")}
                >
                  <Stack
                    width="100%"
                    spacing={5}
                    justifyContent="flex-start"
                    direction="row"
                    alignItems="center"
                  >
                    <img
                      src="/images/Frame 81.png"
                      style={{
                        width: screenHeight >= 900 ? "167px" : "98px",
                      }}
                      alt="Frame 80.png"
                    />
                    <Typography
                      sx={{
                        color: isThirdCardVisible ? "#E9E9E9" : "#fff083",
                        fontSize: "32px",
                        fontWeight: 700,
                      }}
                    >
                      {data4.attributes.title}
                    </Typography>
                  </Stack>
                  {isThirdCardVisible ? null : (
                    <Typography
                      sx={{
                        color: "#FFF083",
                        fontSize: screenHeight >= 900 ? "28px" : "18px",
                        lineHeight: screenHeight >= 900 ? "48px" : "30px",
                        fontWeight: 500,
                      }}
                    >
                      {data4.attributes.short_description}
                    </Typography>
                  )}
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceCards;
