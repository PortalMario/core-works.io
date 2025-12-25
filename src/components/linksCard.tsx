import { Button, Card, CardContent, Grid } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import * as motion from "motion/react-client";

// TODO render buttons dynamically

const LinksCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ height: "100%", display: "flex", width: "100%" }}
      transition={{
        duration: 0.4,
        scale: { type: "tween", visualDuration: 0.4, bounce: 0.2, delay: 0.6 },
      }}
    >
      <Card
        sx={{
          borderColor: "secondary.main",
          borderStyle: "solid",
          padding: (theme) => theme.paddings.small,
          borderWidth: (theme) => theme.borders.width.thin,
          borderRadius: (theme) => theme.shape.borderRadius,
          boxShadow: "none",
          width: "100%",
          height: "100%",
        }}
      >
        <Grid
          container
          sx={{ maxWidth: "70%", margin: "auto", height: "100%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid size={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" endIcon={<CodeIcon />} size="small">
              Checkout the Code
            </Button>
          </Grid>
          <Grid size={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" endIcon={<EmailIcon />} size="small">
              Write us a Mail
            </Button>
          </Grid>
          <Grid size={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" endIcon={<LinkedInIcon />} size="small">
              Connect on LinkedIn
            </Button>
          </Grid>
        </Grid>
      </Card>
    </motion.div>
  );
};

export default LinksCard;
