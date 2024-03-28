import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Service = props => {
  
  return (
    <Card sx={{ maxWidth: 345,
    backgroundColor: '#2b2b2b',
    margin: "1.5rem 1rem",
    color: '#fff',
    "@media (max-width: 768px)": {
      width: '100%',
      height: '200px',
      margin: '1.3rem 0.5rem',
    }
    }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
            sx={{
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                fontFamily: 'Lora, sans-serif',
                "@media (max-width: 768px)": {
                  fontSize: '1rem',
                }
            }}
          >
            {props.icon}&nbsp;
            {props.name}
          </Typography>
          <Typography variant="body2" color="#fff" fontFamily={"Lora, sans-serif"} >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Service;