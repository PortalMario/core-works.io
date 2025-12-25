import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import LogoCard from "./components/logoCard";
import AboutCard from "./components/aboutCard";
import ContactCard from "./components/contactCard";
import LinksCard from "./components/linksCard";
import { ThemeProvider, Box } from "@mui/material";
import theme from "./theme";

// TODO Dark Theme support
// responsive design
// TODO fix right size
// TODO content via md?
// TODO general formating fixes

function App() {;
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Grid container sx={{ maxWidth: "70%" }}>
          <Grid size={6}>
            <LogoCard/>
          </Grid>
          <Grid size={6}>
            <Stack spacing={1}>
              <AboutCard />
              <ContactCard />
            </Stack>
          </Grid>
          <Grid size={12} sx={{ maxHeight: "50%" }}>
            <LinksCard />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
