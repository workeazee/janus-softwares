import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate"  {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
            <Typography
                variant="caption"
                component="div"
                color="#ffffff"
                className='poppins-regular'
                fontSize={'1rem'}
                lineHeight={'1.2rem'}
            >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

  export default CircularProgressWithLabel