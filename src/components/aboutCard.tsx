import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import * as motion from "motion/react-client";

const AboutCard = () => {
  return (
  <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ height: "100%", display: "flex", width: "100%" }}
      transition={{
        duration: 0.4,
        scale: { type: "tween", visualDuration: 0.4, bounce: 0.2, delay: 0.2 },
      }}
  >
    <Card
      sx={{
        borderColor: "secondary.main",
        borderStyle: "solid",
        height: "100%",
        width: "100%",
        borderWidth: (theme) => theme.borders.width.thin,
        borderRadius: (theme) => theme.shape.borderRadius,
        padding: (theme) => theme.paddings.small,
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Your Partner for Cutting-Edge Web Solutions
        </Typography>
        <Typography variant="body1">
          At Core Works, we specialize in delivering innovative web development.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant="contained" startIcon={<GitHubIcon />}>
          Learn More on Our Github
        </Button>
      </CardActions>
    </Card>
    </motion.div>
  );
};

export default AboutCard;
