
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme,ThemeProvider  } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#000',
    },
    warning: {
      main: '#ffc107',
    },
    success: {
      main: '#69f16e',
    },
  },
});

interface Props {
  Cardtitle: string;
  Cardthought: string;
}

const cardStyle= {
  maxwidth: '260px',
  maxHeight: '400px',
  boxShadow: "5px 5px #a2b2c9",
  backgroundColor: "#203655",
  borderRadius: "5px",
  borderColor: "#ffffff",
  borderWidth: "1px",
  marginTop: "20px",
}

export default function MediaCard( { Cardtitle, Cardthought}: Props ) {
  return (
    <Card style={cardStyle} >
      <CardContent >
        <Typography gutterBottom variant="h6" component="div" color="white" >
          {Cardthought}
        </Typography>
        <Typography variant="body2" color="white" >
          by {Cardtitle}
        </Typography>
      </CardContent>
      
    </Card>
  );
}