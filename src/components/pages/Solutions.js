import { Box, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import img from '../../images/solutions.svg'

const Highlighted = styled.span`
    color: #3ACBBC
`

const Img = styled.img`
    width: 950px;
    height: 595px;

    @media (max-width: 750px){
        width: 350px;
        height: 225px;
    }
`

const Solutions = () => {
  return (
    <Box display="flex" flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={{xs: 1.25,md:3}}>
        <Typography
          className="poppins-medium"
          fontSize={{xs: '1.75rem', md:"3rem"}}
          lineHeight={"108%"}
          color={"#30DCCA"}
        >
          Solutions That We Provide
        </Typography>
        <Typography
          className="plus-jakarta-sans"
          fontSize={{xs: '1rem', md: "1.5rem"}}
          lineHeight={"150%"}
          color={"#fff"}
          width={{ xs: "100%", md: "50%" }}
          textAlign={'center'}
        >
         Providing you with the cutting <Highlighted>edge solutions</Highlighted> that the tech world has to offer. Here are some of the <Highlighted>latest tech</Highlighted> that we thrive on.
        </Typography>

        <Img src={img}/>
    </Box>
  )
}

export default Solutions