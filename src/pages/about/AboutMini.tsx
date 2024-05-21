import { FC, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Button, Divider } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { useQuery } from "react-query";
import { ContentData } from "./About";
import LoadingComponent from "../../components/loading/LoadingComponent";
import { useTranslation } from "react-i18next";

const AboutMini: FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const fetchContentData = async () => {
    const { data } = await api.get(
      `/api/title-texts?locale=${i18n.language}&populate=image`
    );
    return data.data;
  };

  const {
    refetch: fetchTexts,
    data: contentData,
    error,
    isLoading,
  } = useQuery<ContentData[], Error>("contentData", fetchContentData);

  useEffect(() => {
    fetchTexts();
  }, [i18n.language]);

  if (isLoading)
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoadingComponent />
      </div>
    );
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      <Stack
        sx={{
          display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
          height: "100%",
          overflow: "auto",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#fff",
            fontSize: "24px",
            fontWeight: 700,
            fontFamily: "Trebuchet MS, sans-serif",
            textTransform: "uppercase",
          }}
        >
          who we are
        </Typography>
        {contentData?.map((item) => (
          <>
            {item.attributes.type === "about_us_title" && (
              <>
                <Stack
                  direction="row"
                  key={`about_mini`}
                  width="100%"
                  justifyContent="flex-end"
                >
                  <Box
                    sx={{
                      background: "rgba(10, 10, 14, 0.7)",
                      p: 1,
                      width: "92%",
                      borderRadius: "8px 0px 0px 8px",
                      color: "#E7EAFF",
                    }}
                  >
                    {item.attributes.image?.data?.attributes?.formats?.medium
                      ?.url ? (
                      <img
                        className="aboutImage"
                        style={{
                          width: "140px",
                          height: "160px",
                          borderRadius: "8px",
                          marginRight: 10,
                        }}
                        src={`http://95.85.121.153:1337${item.attributes.image.data.attributes.formats.medium.url}`}
                        alt={
                          item.attributes.image.data.attributes
                            .alternativeText || "Image"
                        }
                      />
                    ) : null}
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: "30px",
                        width: "80%",
                        fontFamily: "Trebuchet MS, sans-serif",
                      }}
                    >
                      {item.attributes.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "25px",
                        fontFamily: "Trebuchet MS, sans-serif",
                      }}
                    >
                      {item.attributes.description}
                    </Typography>
                  </Box>
                </Stack>
              </>
            )}
            {item.attributes.type === "about_us_description" && (
              <Stack p={2}>
                <Box
                  sx={{
                    p: 1,
                    width: "92%",
                    height: "auto",
                  }}
                >
                  {item.attributes.image?.data?.attributes?.formats?.medium
                    ?.url ? (
                    <img
                      className="aboutImageRight"
                      style={{
                        width: "140px",
                        height: "160px",
                        borderRadius: "8px",
                        marginLeft: 10,
                      }}
                      src={`http://95.85.121.153:1337${item.attributes.image.data.attributes.formats.medium.url}`}
                      alt={
                        item.attributes.image.data.attributes.alternativeText ||
                        "Image"
                      }
                    />
                  ) : null}
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "30px",
                      fontFamily: "Trebuchet MS, sans-serif",
                      width: "50%",
                    }}
                  >
                    {item.attributes.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "25px",
                      fontFamily: "Trebuchet MS, sans-serif",
                    }}
                  >
                    {item.attributes.short_description}
                  </Typography>
                </Box>
              </Stack>
            )}
          </>
        ))}

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          mb={3}
        >
          <Button
            onClick={() => navigate("/")}
            startIcon={
              <ArrowRightAltIcon
                sx={{
                  color: "#fff",
                  transform: "rotate(180deg)",
                  fontSize: "34px",
                  width: "30px",
                }}
              />
            }
            sx={{
              textTransform: "none",
              color: "#fff",
              fontWeight: 600,
              fontFamily: "Trebuchet MS, sans-serif",
            }}
          >
            Home
          </Button>

          <Divider orientation="vertical" flexItem color="#fff" />
          <Button
            onClick={() => navigate("/portfolio")}
            endIcon={<ArrowRightAltIcon sx={{ color: "#fff" }} />}
            sx={{
              textTransform: "none",
              color: "#fff",
              fontWeight: 600,
              fontFamily: "Trebuchet MS, sans-serif",
            }}
          >
            Portfolio
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default AboutMini;
