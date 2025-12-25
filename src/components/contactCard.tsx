import {
  IconButton,
  ListItemIcon,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { VscAzure } from "react-icons/vsc";
import { TbBrandAnsible } from "react-icons/tb";
import { FaLinux } from "react-icons/fa";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { SiOpentofu } from "react-icons/si";
import * as motion from "motion/react-client";

// TODO rename this file
// TODO render list dynamically
const ContactCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ height: "100%", display: "flex", width: "100%" }}
      transition={{
        duration: 0.4,
        scale: { type: "tween", visualDuration: 0.4, bounce: 0.2, delay: 0.4 },
      }}
    >
      <Card
        sx={{
          height: "100%",
          width: "100%",
          padding: (theme) => theme.paddings.small,
          borderColor: "secondary.main",
          borderStyle: "solid",
          borderWidth: (theme) => theme.borders.width.thin,
          borderRadius: (theme) => theme.shape.borderRadius,
          boxShadow: "none",
          overflowY: "auto",
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Working With
          </Typography>
          <List dense={true}>
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="link"
                  href="https://azure.microsoft.com/en-us/"
                  target="_blank"
                  rel="noopener"
                >
                  <OpenInNewIcon />
                </IconButton>
              }
            >
              <ListItemIcon>
                <VscAzure size={24} color="primary" />
              </ListItemIcon>
              <ListItemText primary="Microsoft Azure" />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="link"
                  href="https://www.redhat.com/en/ansible-collaborative?intcmp=7015Y000003t7aWQAQ"
                  target="_blank"
                  rel="noopener"
                >
                  <OpenInNewIcon />
                </IconButton>
              }
            >
              <ListItemIcon>
                <TbBrandAnsible size={24} color="primary" />
              </ListItemIcon>
              <ListItemText primary="Ansible" />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="link"
                  href="https://www.linux.org/"
                  target="_blank"
                  rel="noopener"
                >
                  <OpenInNewIcon />
                </IconButton>
              }
            >
              <ListItemIcon>
                <FaLinux size={24} color="primary" />
              </ListItemIcon>
              <ListItemText primary="Linux" />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="link"
                  href="https://opentofu.org/"
                  target="_blank"
                  rel="noopener"
                >
                  <OpenInNewIcon />
                </IconButton>
              }
            >
              <ListItemIcon>
                <SiOpentofu size={24} color="primary" />
              </ListItemIcon>
              <ListItemText primary="OpenTofu" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactCard;
