import { Button, Card, CardContent, Divider } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import * as motion from "motion/react-client";

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
          height: "77%", // TODO make this better
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            padding: (theme) => theme.paddings.small,
          }}
        >
          <Button variant="contained" endIcon={<CodeIcon />} size="small">
            Checkout the Code
          </Button>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Button variant="contained" endIcon={<EmailIcon />} size="small">
            Write us a Mail
          </Button>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Button variant="contained" endIcon={<LinkedInIcon />} size="small">
            Connect on LinkedIn
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LinksCard;
