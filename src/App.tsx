import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import LogoCard from "./components/logoCard";
import AboutCard from "./components/aboutCard";
import TechCard from "./components/techCard";
import LinksCard from "./components/linksCard";
import { ThemeProvider, Box } from "@mui/material";
import theme from "./theme";

// TODO Dark Theme support
// TODO responsive design
// TODO dont show scrollbar for whole page
// TODO add links to buttons

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Grid container sx={{ maxWidth: "70%" }}>
          <Grid size={6} sx={{ maxHeight: "40vh" }}>
            <LogoCard />           
          </Grid>
          <Grid size={6} >
            <Stack spacing={1}>
              <AboutCard />
              <TechCard />
            </Stack>
          </Grid>
          <Grid size={12} sx={{ maxHeight: "30%" }}>
            <LinksCard />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
