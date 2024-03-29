import { FC, useEffect, useState } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import ServiceCards from "../../components/service/ServiceCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface SizeMap {
  [key: string]: {
    fontSize?: string;
    lineHeight?: string;
    width?: string;
  };
}

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

const sizeMap: SizeMap = {
  lg: {
    fontSize: "36px",
    lineHeight: "40px",
  },
  md: {
    fontSize: "24px",
    lineHeight: "28px",
  },
  sm: {
    fontSize: "16px",
    lineHeight: "20px",
  },
  xs: {
    fontSize: "14px",
    lineHeight: "14px",
  },
};

const sizeTitle: SizeMap = {
  lg: {
    fontSize: "46px",
    lineHeight: "100px",
  },
  md: {
    fontSize: "36px",
    lineHeight: "70px",
  },
  sm: {
    fontSize: "22px",
    lineHeight: "40px",
  },
  xs: {
    fontSize: "14px",
    lineHeight: "14px",
  },
};

const Services: FC = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let size;
  let title;
  let width;
  if (screenHeight >= 900) {
    size = "lg";
    title = "lg";
    width = "lg";
  } else if (screenHeight >= 600) {
    size = "md";
    title = "md";
    width = "md";
  } else if (screenHeight >= 400) {
    size = "sm";
    title = "sm";
    width = "sm";
  } else {
    size = "xs";
    title = "xs";
    width = "xs";
  }

  return (
    <>
      <Stack width="100%">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{
            width: "100%",
          }}
          speed={5000}
          loop={true}
        >
          <SwiperSlide>
            <Box
              sx={{
                height: screenHeight >= 900 ? "80vh" : "83vh",
                width: "100%",
                pt: screenHeight >= 900 ? 7 : 4,
              }}
            >
              <Stack sx={{ height: "100%", pr: 5 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "40%",
                    position: "relative",
                  }}
                >
                  <img
                    src="/images/Group 73.png"
                    style={{ width: "100%", height: "100%" }}
                    alt="screenHeight >= 900 ?"
                  />
                  <Box sx={{ position: "absolute", top: 10, width: "100%" }}>
                    <Stack
                      alignItems="center"
                      width="100%"
                      justifyContent="center"
                    >
                      <Typography
                        sx={{
                          color: "#E9E9E9",
                          ...sizeTitle[title],
                        }}
                      >
                        Our services
                      </Typography>
                      <Stack
                        sx={{
                          pr: { lg: 15, md: 5, sm: 2 },
                          pl: { lg: 15, md: 5, sm: 2 },
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "start",
                            color: "#E9E9E9",
                            ...sizeMap[size],
                          }}
                        >
                          "Choose from either the Strategic Coach® Signature
                          Program or the 10x Ambition Program™ with Dan
                          Sullivan. Both offer the opportunity to strategize
                          about what’s most important to your business at the
                          moment and leave with concrete next steps and action
                          plans to
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                  <Stack
                    sx={{
                      position: "absolute",
                      width: "100%",
                      display: "flex",
                      mt: { lg: -4, md: -4, sm: -3, xs: -2 },
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/images/Rectangle 14.png"
                      style={{ ...imgWidth[width], zIndex: 110 }}
                      alt="Rectangle 14"
                    />
                  </Stack>
                </Box>
                <Box sx={{ height: "55%", mt: 1 }}>
                  <ServiceCards />
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                height: screenHeight >= 900 ? "80vh" : "83vh",
                width: "100%",
                pt: screenHeight >= 900 ? 7 : 4,
              }}
            >
              <Stack sx={{ height: "100%", pr: 5 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "40%",
                    position: "relative",
                  }}
                >
                  <img
                    src="/images/Group 73.png"
                    style={{ width: "100%", height: "100%" }}
                    alt="screenHeight >= 900 ?"
                  />
                  <Box sx={{ position: "absolute", top: 10, width: "100%" }}>
                    <Stack
                      alignItems="center"
                      width="100%"
                      justifyContent="center"
                    >
                      <Typography
                        sx={{
                          color: "#E9E9E9",
                          ...sizeTitle[title],
                        }}
                      >
                        Our services
                      </Typography>
                      <Stack
                        sx={{
                          pr: { lg: 15, md: 5, sm: 2 },
                          pl: { lg: 15, md: 5, sm: 2 },
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "start",
                            color: "#E9E9E9",
                            ...sizeMap[size],
                          }}
                        >
                          "Choose from either the Strategic Coach® Signature
                          Program or the 10x Ambition Program™ with Dan
                          Sullivan. Both offer the opportunity to strategize
                          about what’s most important to your business at the
                          moment and leave with concrete next steps and action
                          plans to
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                  <Stack
                    sx={{
                      position: "absolute",
                      width: "100%",
                      display: "flex",
                      mt: { lg: -4, md: -4, sm: -3, xs: -2 },
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/images/Rectangle 14.png"
                      style={{ ...imgWidth[width], zIndex: 110 }}
                      alt="Rectangle 14"
                    />
                  </Stack>
                </Box>
                <Box sx={{ height: "55%", mt: 1 }}>
                  <ServiceCards />
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                height: screenHeight >= 900 ? "80vh" : "83vh",
                width: "100%",
                pt: screenHeight >= 900 ? 7 : 4,
              }}
            >
              <Stack sx={{ height: "100%", pr: 5 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "40%",
                    position: "relative",
                  }}
                >
                  <img
                    src="/images/Group 73.png"
                    style={{ width: "100%", height: "100%" }}
                    alt="screenHeight >= 900 ?"
                  />
                  <Box sx={{ position: "absolute", top: 10, width: "100%" }}>
                    <Stack
                      alignItems="center"
                      width="100%"
                      justifyContent="center"
                    >
                      <Typography
                        sx={{
                          color: "#E9E9E9",
                          ...sizeTitle[title],
                        }}
                      >
                        Our services
                      </Typography>
                      <Stack
                        sx={{
                          pr: { lg: 15, md: 5, sm: 2 },
                          pl: { lg: 15, md: 5, sm: 2 },
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "start",
                            color: "#E9E9E9",
                            ...sizeMap[size],
                          }}
                        >
                          "Choose from either the Strategic Coach® Signature
                          Program or the 10x Ambition Program™ with Dan
                          Sullivan. Both offer the opportunity to strategize
                          about what’s most important to your business at the
                          moment and leave with concrete next steps and action
                          plans to
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                  <Stack
                    sx={{
                      position: "absolute",
                      width: "100%",
                      display: "flex",
                      mt: { lg: -4, md: -4, sm: -3, xs: -2 },
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/images/Rectangle 14.png"
                      style={{ ...imgWidth[width], zIndex: 110 }}
                      alt="Rectangle 14"
                    />
                  </Stack>
                </Box>
                <Box sx={{ height: "55%", mt: 1 }}>
                  <ServiceCards />
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
        </Swiper>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          mt={screenHeight >= 900 ? 10 : 3}
        >
          <Button
            onClick={() => navigate("/portfolio")}
            startIcon={
              <ArrowRightAltIcon
                sx={{
                  color: "#828282",
                  transform: "rotate(180deg)",
                  fontSize: "34px",
                  width: "30px",
                }}
              />
            }
            sx={{ textTransform: "none", color: "#828282", fontWeight: 600 }}
          >
            Previous
          </Button>

          <Divider orientation="vertical" />
          <Button
            onClick={() => navigate("/contact")}
            endIcon={<ArrowRightAltIcon sx={{ color: "#828282" }} />}
            sx={{ textTransform: "none", color: "#828282", fontWeight: 600 }}
          >
            Read more
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Services;
