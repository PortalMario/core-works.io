import {
  IconButton,
  ListItemIcon,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { VscAzure } from "react-icons/vsc";
import { TbBrandAnsible } from "react-icons/tb";
import { FaLinux } from "react-icons/fa";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { SiOpentofu } from "react-icons/si";
import * as motion from "motion/react-client";
import type { IconType } from "react-icons";

const techItems = [
  {
    name: "Microsoft Azure",
    icon: <VscAzure size={24} color="primary" />,
    link: "https://azure.microsoft.com/en-us/",
  },
  {
    name: "Ansible",
    icon: <TbBrandAnsible size={24} color="primary" />,
    link: "https://www.redhat.com/en/ansible-collaborative?intcmp=7015Y000003t7aWQAQ",
  },
  {
    name: "Linux",
    icon: <FaLinux size={24} color="primary" />,
    link: "https://www.linux.org/",
  },
  {
    name: "OpenTofu",
    icon: <SiOpentofu size={24} color="primary" />,
    link: "https://opentofu.org/",
  },
  {
    name: "Microsoft Azure",
    icon: <VscAzure size={24} color="primary" />,
    link: "https://azure.microsoft.com/en-us/",
  },
  {
    name: "Ansible",
    icon: <TbBrandAnsible size={24} color="primary" />,
    link: "https://www.redhat.com/en/ansible-collaborative?intcmp=7015Y000003t7aWQAQ",
  },
  {
    name: "Linux",
    icon: <FaLinux size={24} color="primary" />,
    link: "https://www.linux.org/",
  },
  {
    name: "OpenTofu",
    icon: <SiOpentofu size={24} color="primary" />,
    link: "https://opentofu.org/",
  },
];

const generateTechListItem = (item: {
  name: string;
  icon: IconType;
  link: string;
}) => {
  return (
    <ListItem
      key={item.name}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="link"
          href={item.link}
          target="_blank"
          rel="noopener"
        >
          <OpenInNewIcon />
        </IconButton>
      }
    >
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.name} />
    </ListItem>
  );
};

const TechCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{
        maxHeight: "100%",
        display: "flex",
        width: "100%",
        overflowY: "hidden",
      }}
      transition={{
        duration: 0.4,
        scale: { type: "tween", visualDuration: 0.4, bounce: 0.2, delay: 0.4 },
      }}
    >
      <Card
        sx={{
          padding: (theme) => theme.paddings.small,
          borderColor: "secondary.main",
          borderStyle: "solid",
          borderWidth: (theme) => theme.borders.width.thin,
          borderRadius: (theme) => theme.shape.borderRadius,
          boxShadow: "none",
          overflow: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Working With
          </Typography>
          <Box
            sx={{
              overflow: "hidden",
              backgroundColor: "#fff",
              height: "200px", // TODO does this really need to be fixed
              maskImage:
                "linear-gradient(to bottom, transparent 4%, black 10%, black 90%, transparent 96%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 4%, black 10%, black 90%, transparent 96%)",
            }}
          >
            <motion.div
              animate={{ y: ["5%", "-45%"] }}
              transition={{
                duration: 6,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
              onAnimationComplete={() => {}}
            >
              <List dense={true}>{techItems.map(generateTechListItem)}</List>
            </motion.div>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TechCard;
