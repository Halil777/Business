import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Card {
  id: string;
  title_en: string;
  short_en: string;
  asset: {
    url: string;
  };
}

interface ServiceCardProps {
  cards: Card[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ cards }) => {
  const [showDescription, setShowDescription] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setShowDescription(showDescription === index ? null : index);
  };

  return (
    <Box
      sx={{
        height: "80vh",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <Stack spacing={5} direction="row" justifyContent="center">
        <Stack width="90%" spacing={2}>
          {cards.map((card, index) => (
            <Box
              key={card.id}
              sx={{
                position: "relative",
                height: "auto",
                width: "100%",
                background:
                  showDescription === index
                    ? "rgba(10, 10, 14, 0.7)"
                    : "rgba(10, 10, 14, 0.8)",
                transition: "background-color 0.3s",
                cursor: "pointer",
                borderRadius: "8px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
                onClick={() => handleClick(index)}
              >
                <Stack
                  direction="row"
                  spacing={3}
                  justifyContent="space-between"
                  alignItems="center"
                  p={3}
                >
                  <img
                    style={{ width: "56px" }}
                    src={card.asset.url || "./images/Frame 81.png"}
                    alt=""
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      color: showDescription === index ? "orange" : "#E9E9E9",
                    }}
                  >
                    {card.title_en}
                  </Typography>
                  <IconButton>
                    {showDescription === index ? (
                      <ExpandLessIcon
                        sx={{
                          color: showDescription ? "orange" : "#E9E9E9",
                        }}
                      />
                    ) : (
                      <ExpandMoreIcon
                        sx={{
                          color: showDescription ? "orange" : "#E9E9E9",
                        }}
                      />
                    )}
                  </IconButton>
                </Stack>
                {showDescription === index && (
                  <Stack direction="row" justifyContent="center">
                    <Typography
                      sx={{
                        color: "orange",
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "30px",
                        textAlign: "center",
                        mb: 3,
                        width: "95%",
                      }}
                    >
                      {card.short_en}
                    </Typography>
                  </Stack>
                )}
              </Box>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ServiceCard;