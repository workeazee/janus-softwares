import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../images/Janus_Logo.png";
import { Drawer } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import HomeSVG from "../../images/Home.svg";
import styled from "styled-components";

const Image = styled.img`
  width: 132px;
  height: 132px;
`;

const Header = (props) => {
  const pages = [
    { name: "About Us", reference: props.aboutRef },
    { name: "Why Us", reference: props.servicesRef },
    { name: "Our Approach", reference: props.ourApproachRef },
    { name: "Solutions", reference: props.solutionsRef },
    { name: "Members", reference: props.teamMembersRef },
    // { name: "Case Studies", reference: props.aboutRef },
    { name: "Testimonials", reference: props.employeeRef },
    { name: "Contact Us", reference: props.contactRef },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const styles = {
    color: "turquoise",
  };

  const executeScroll = (reference) => {
    reference.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      handleCloseNavMenu();
    }, 800);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#2b2b2b",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{display:'flex', fexl:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
          <Box sx={{display: { xs: "none", lg: "flex" } , flexDirection:'row', gap: 2, alignItems:'center', justifyContent:'center'}}>
            <Box sx={{ flexGrow: 0}}>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="JS" src={Logo} />
                </IconButton>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              >
              Janus <span style={styles}> Softwares</span>
            </Typography>
          </Box>
          <Box sx={{display: { xs: "none", lg: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                className="poppins-regular"
                key={page.handleOpenNavMenu}
                // onClick={handleCloseNavMenu}
                onClick={() => {executeScroll(page.reference);}}
                sx={{ my: 2, color: index === pages.length-1  ? "#30DCCA" : "white", display: "block", fontSize:16, textTransform: 'none' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Mobile View */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", lg: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            >
            Janus <span style={styles}>Softwares</span>
          </Typography>

          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{p: 0}}
              >
              <MenuIcon sx={{color:'#30DCCA', bgcolor:'#0E0E0E', p: 1, borderRadius: '3px'}} />
            </IconButton>
            <Drawer
              anchor={'left'}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <Box sx={{width: '253px', bgcolor:'#262626', height:'100%', overflowY:'scroll'}}>
                <Box py={{xs: 2, md: 5}} px={2} display="flex" flexDirection='row' justifyContent='flex-end' position={'sticky'} top={0}>
                  <CloseIcon fontSize="medium" sx={{color:"#fff"}} onClick={handleCloseNavMenu}/>
                </Box>

                <Box display='flex' justifyContent='center' alignItems={'center'} flexDirection={'column'} mb={2}>
                  <Image src={HomeSVG} />
                  <Typography 
                    className="poppins-medium"
                    component='a'
                    href=""
                    noWrap
                    sx={{
                      mt: 2,
                      color: "#ffffff",
                      textDecoration: "none",
                      fontSize: '18px'
                  }}>
                      Janus Softwares
                  </Typography>
                  <Typography 
                    className="poppins-regular"  
                    sx={{
                      color: "#ffffff",
                      textDecoration: "none",
                      fontSize: '13px'
                  }}>
                      One Stop Online Solutions
                  </Typography>
                </Box>

              {pages.map((page, index) => (
                <MenuItem
                key={page.name}
                onClick={() => {executeScroll(page.reference);}}
                >
                  <Typography textAlign="center" className="poppins-regular" color={index === pages.length-1  ? "#30DCCA" : "#ffffff"} fontSize={'14px'}>{page.name}</Typography>
                </MenuItem>
              ))}
              </Box>
            </Drawer>
          </Box>
          
        </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
