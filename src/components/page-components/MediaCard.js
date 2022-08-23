import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MediaCard = (props) => {
  const styles = {
    textDecoration: "none",
  }
  const styles1 = {
    backgroundColor: "#2b2b2b",
    height: "20vh",
    width: "18%",
    margin: "0.5rem 0.5rem",
    "@media (max-width: 900px)": {
      width: "28%",
      height: "12vh",
    },
    "@media (max-width: 650px)": {
      width: "45%",
      height: "17vh",
    }
  }
  return (
    <Card
      sx={styles1}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Lora, sans-serif",
          }}
        >
          {props.name}
          {props.icon}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "#fff",
            fontFamily: "Lora, sans-serif",
        }}
        >
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={props.url} target="_blank" rel="noreferrer" style={styles}>
          <Button size="small">Learn More</Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
