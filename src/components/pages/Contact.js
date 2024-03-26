import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import bgImg from "../../images/contact_bg.png";
import phoneImg from "../../images/icons/phone.svg";
import emailImg from "../../images/icons/email.svg";
import locationImg from "../../images/icons/location.svg";

const Label = (props) => {
  return (
    <Typography
      className="poppins-medium"
      fontSize={"1rem"}
      color={"#ffffff"}
      lineHeight={"154%"}
      mb={1}
    >
      {props.text}
    </Typography>
  );
};

const Container = ({ img, title, desc }) => {
  return (
    <Box display={"flex"} flexDirection={"row"} alignItems="center" gap={3}>
      <img src={img} />
      <Box>
        <Typography
          className="poppins-regular"
          fontSize={"1rem"}
          lineHeight={"1.8rem"}
          color={"#ffffff"}
          mb={0.5}
        >
          {title.toUpperCase()}
        </Typography>
        <Typography
          className="poppins-bold"
          fontSize={"1rem"}
          lineHeight={"1.8rem"}
          color={"#ffffff"}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

const Contact = (props) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    description: "",
  });
  return (
    <Box
      ref={props.contactRef}
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"space-around"}
      sx={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        height: "100%",
        width: "100%",
      }}
      py={10}
    >
      <Box
        px={{ xs: 2.5, md: 5 }}
        py={{ xs: 5, md: 10 }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={3}
        bgcolor={"#262626"}
      >
        <Typography
          className="poppins-medium"
          fontSize={{ xs: "1.25rem", md: "1.75rem" }}
          lineHeight={"108%"}
          color={"#30DCCA"}
        >
          Want To Disscuss About A Project?
        </Typography>

        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Box width={"100%"}>
            <Label text="Full Name" />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              value={form.fullName}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  fullName: e.target.value,
                }))
              }
            />
          </Box>
          <Box width={"100%"}>
            <Label text="Email" />
            <TextField
              fullWidth
              type="email"
              variant="outlined"
              value={form.email}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
          </Box>
          <Box width={"100%"}>
            <Label text="Phone" />
            <TextField
              fullWidth
              type="number"
              variant="outlined"
              value={form.phone}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }
            />
          </Box>
          <Box width={"100%"}>
            <Label text="Description" />
            <TextField
              fullWidth
              id="outlined-textarea"
              multiline
              variant="outlined"
              value={form.email}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#30DCCA",
              py: 2,
              "&:hover": {
                bgcolor: "#30DCCA",
              },
              marginTop: 5,
            }}
          >
            Submit
          </Button>
        </form>
      </Box>

      <Box display={"flex"} flexDirection={"column"} gap={3} mt={{xs: 5, md: 0}}>
        <Typography
          className="poppins-bold"
          fontSize={{ xs: '1.5rem',  md: "3rem"}}
          lineHeight={"3rem"}
          color={"#ffffff"}
          display={{xs: 'none', md: 'block'}}
        >
          let’s work together?
        </Typography>
        <Typography
          className="poppins-regular"
          fontSize={"1rem"}
          lineHeight={"2rem"}
          color={"#ffffff"}
          display={{xs: 'none', md: 'block'}}
        >
          "Let's connect for shared success and endless possibilities. <br />{" "}
          Together, we can create something extraordinary."
        </Typography>

        <Container
          img={phoneImg}
          title={"Have any question?"}
          desc="Free +91 9029050299"
        />
        <Container
          img={emailImg}
          title={"Send email"}
          desc="janus.softwares@gmail.com"
        />
        <Container
          img={locationImg}
          title={"Visit US"}
          desc="104/105, A Wing, Manas Residency, Thane(W), Maharashtra"
        />
      </Box>
    </Box>
  );
};

export default Contact;
