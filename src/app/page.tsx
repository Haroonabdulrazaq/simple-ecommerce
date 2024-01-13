import { Container, Grid, Hidden, Typography } from "@mui/material";
import { theme } from "./theme/theme";

const headerContainer = {
  width: "100%",
  minHeight: "100vh",
  border: "solid 1px red",
};

const topHeader = {
  background: "primary.main",
};

export default function Home() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Hidden smDown>
          <Grid container item xs={12} style={topHeader}>
            <Grid></Grid>
            <Grid>
              <Typography>Follow us and get a chance to win 80% off</Typography>{" "}
            </Grid>
            <Grid>
              {" "}
              <Typography>Follow us:</Typography>{" "}
            </Grid>
          </Grid>
        </Hidden>
        <Grid item xs={12}>
          bottom header
        </Grid>
      </Grid>
    </Container>
  );
}
