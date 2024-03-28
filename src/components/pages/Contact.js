import {
  Box,
  Typography,
  TextField,
  Button,
  styled,
  Alert,
  Snackbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import bgImg from "../../images/contact_bg.png";
import phoneImg from "../../images/icons/phone.svg";
import emailImg from "../../images/icons/email.svg";
import locationImg from "../../images/icons/location.svg";
import emailjs from "@emailjs/browser";

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

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ffffff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#ffffff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#30DCCA",
    },
  },
});

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
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    description: "",
  });

  const [submitting, setSubmitting] = useState(false)

  const [alert, setAlert] = useState({
    success: "",
    error: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.email.trim() ||
      !form.fullName.trim() ||
      !form.description.trim() ||
      !form.phone.trim()
    ) {
      setAlert({
        success: "",
        error: "Please fill all the fields before submit",
      });
      return;
    } else {
      setAlert({
        success: "",
        error: "",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setAlert({
        success: "",
        error: "Invalid Email",
      });
      return;
    } else {
      setAlert({
        success: "",
        error: "",
      });
    }
    // Validate phone number length
    const isValidPhoneNumber = /^[6-9]\d{9}$/.test(form.phone);
  
    if (!isValidPhoneNumber) {
      setAlert({
        success: "",
        error: "Invalid Phone Number",
      });
      return;
    } else {
      setAlert({
        success: "",
        error: "",
      });
    }

    setAlert({
      success: "Email sent successfully",
      error: "",
    });
    const templateParams = {
      fullName: form.fullName,
      phone: form.phone,
      email: form.email,
      description: form.description,
    };

    setSubmitting(true)
    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey,
      })
      .then(
        () => {
          setForm({
            phone: "",
            email: "",
            description: "",
            fullName: "",
          });
          setAlert({
            success: "Email sent successfully!",
            error: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setAlert({
            success: "",
            error: "Something went wrong! Please try again later.",
          });
        }
      ).finally(() => {
        setSubmitting(false)
      });
  };

  const handleClose = () => {
    setAlert({
      success: "",
      error: "",
    });
  };

  useEffect(() => {
    handleClose();
  }, [form]);

  return (
    <Box
      ref={props.contactRef}
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={{ xs: "center", md: "start" }}
      justifyContent={"space-around"}
      sx={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        height: "100%",
        width: "100%",
      }}
      py={10}
      zIndex={999}
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
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Box width={"100%"}>
            <Label text="Full Name" />
            <CssTextField
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
            <CssTextField
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
            <CssTextField
              fullWidth
              type="text"
              variant="outlined"
              value={form.phone}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }
              inputProps={{
                min: 0,
                inputMode: "numeric",
                style: { "-moz-appearance": "textfield" },
              }}
            />
          </Box>
          <Box width={"100%"}>
            <Label text="Description" />
            <CssTextField
              fullWidth
              id="outlined-textarea"
              multiline
              minRows={6}
              variant="outlined"
              value={form.description}
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
            />
          </Box>

          <Button
            variant="contained"
            type="submit"
            sx={{
              bgcolor: "#30DCCA",
              py: 2,
              "&:hover": {
                bgcolor: "#30DCCA",
              },
              "&:disabled": {
                bgcolor: "#30DCCA",
                opacity: 0.5, 
                cursor: "not-allowed",
                color:'#fff'
              },
              marginTop: 5,
            }}
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        mt={{ xs: 5, md: 0 }}
      >
        <Typography
          className="poppins-bold"
          fontSize={{ xs: "1.5rem", md: "3rem" }}
          lineHeight={"3rem"}
          color={"#ffffff"}
          display={{ xs: "none", md: "block" }}
        >
          let’s work together?
        </Typography>
        <Typography
          className="poppins-regular"
          fontSize={"1rem"}
          lineHeight={"2rem"}
          color={"#ffffff"}
          display={{ xs: "none", md: "block" }}
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
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={!!alert.success || !!alert.error}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          severity={alert.success ? "success" : "error"}
          onClose={handleClose}
        >
          {alert.success || alert.error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
