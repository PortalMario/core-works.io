import { Card, CardMedia } from "@mui/material";
import logo_dark from "../assets/logo_dark.png";
import * as motion from "motion/react-client";

const LogoCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ height: "100%", display: "flex" }}
      transition={{
        duration: 0.4,
        scale: { type: "tween", visualDuration: 0.4, bounce: 0.2, delay: 0.1 },
      }}
    >
      <Card
        sx={{
          height: "100%",
          borderColor: "secondary.main",
          borderStyle: "solid",
          borderWidth: (theme) => theme.borders.width.thin,
          borderRadius: (theme) => theme.shape.borderRadius,
          padding: (theme) => theme.paddings.small,
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardMedia image={logo_dark} component="img" alt="logo" />
      </Card>
    </motion.div>
  );
};

export default LogoCard;
