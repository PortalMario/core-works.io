import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <Box sx={{ borderColor: 'primary.light'}}> LOGO </Box>
      </Grid>
      <Grid size={6}>
        <Stack>
          <Box> ABOUT </Box>
          <Box> CONTACT </Box>
        </Stack>
      </Grid>
      <Grid size={12}>
        <Box> LINKS </Box>
      </Grid>
    </Grid>
  )
}

export default App
