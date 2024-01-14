import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CommentIcon from "@mui/icons-material/Comment";
import { featurePosts } from "../../utils/constants";
import { FeaturePost } from "../../utils/types";
import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Image from "next/image";

const FeaturedPost = () => {
  return (
    <Box sx={{ flexGrow: 1, marginY: 10 }}>
      <Box sx={{ padding: 4, fontWeight: "bold", textAlign: "center" }}>
        <Typography
          variant="caption"
          gutterBottom
          sx={{ color: "primary.main" }}
        >
          Practice Advice
        </Typography>
        <Typography variant="h4">Featured Posts</Typography>
      </Box>
      <Grid container spacing={4}>
        {featurePosts.map((item: FeaturePost) => (
          <Grid item xs={12} md={4} key={item.number}>
            <Paper
              elevation={2}
              sx={{
                position: "relative",
                width: "100%",
                height: "200",
                marginBottom: 2,
              }}
            >
              <Image
                src={`/assets/Images/Feature-Post-${item.number}.svg`}
                alt={`Featured Post ${item.number}`}
                width={50}
                height={50}
                layout="responsive"
                objectFit="contain"
              />
              <Chip
                label="NEW"
                sx={{
                  position: "absolute",
                  backgroundColor: "red",
                  zIndex: "5",
                  top: 16,
                  left: 16,
                  borderRadius: 1,
                }}
                color="secondary"
              />
              <Box sx={{ padding: 2 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "500", color: "text.primary" }}
                >
                  {item.postTitle}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  We focus on ergonomics and meeting you where you work. Its
                  only a keystroke away.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: 2,
                    fontSize: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconButton>
                      <AccessAlarmIcon sx={{ color: "primary.main" }} />
                    </IconButton>
                    <Typography variant="caption" color="text.primary">
                      {item.postDate}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconButton>
                      <CommentIcon sx={{ color: "secondary.main" }} />
                    </IconButton>
                    <Typography variant="caption">{`${item.numberOfComments} Comments`}</Typography>
                  </Box>
                </Box>
                <Button>
                  Learn More <KeyboardArrowRightIcon />
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedPost;
