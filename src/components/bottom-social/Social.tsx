import { FC } from "react";
import { IconButton, Stack, Tooltip } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";

interface SocialMediaData {
  id: number;
  attributes: {
    title: string;
    url: string;
    icon: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

const Social: FC = () => {
  const { data, isLoading, error } = useQuery<SocialMediaData[]>(
    "socialMediaData",
    async () => {
      const response = await axios.get(
        "http://95.85.121.153:1337/api/social-medias?populate=icon"
      );
      return response.data.data;
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>Error: {(error as Error)?.message || "An error occurred."}</div>
    );

  if (!Array.isArray(data)) {
    return <div>Data is not in the expected format.</div>;
  }

  return (
    <>
      <Stack direction="row" spacing={{ lg: 0, md: 0, sm: 2, xs: 2 }}>
        {data.map((socialMedia) => {
          const { title, url, icon } = socialMedia.attributes;
          // Corrected the iconUrl construction
          const iconUrl = `http://95.85.121.153:1337${icon?.data.attributes.url}`;
          if (title && url && icon?.data.attributes.url) {
            return (
              <Tooltip key={socialMedia.id} title={title}>
                <IconButton href={url} target="_blank">
                  <img
                    data-aos="fade-down"
                    data-aos-delay={`${socialMedia.id * 200}`}
                    src={iconUrl}
                    alt={title}
                    style={{ width: 32, height: 32, color: "#fff" }}
                  />
                </IconButton>
              </Tooltip>
            );
          }
          return null;
        })}
      </Stack>
    </>
  );
};

export default Social;
