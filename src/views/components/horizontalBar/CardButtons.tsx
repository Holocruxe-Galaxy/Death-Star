// ** MUI Imports
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/* import ModeButton from '../horizontalBarButtons/ModeButton' */
/* import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler' */

const CardButtons = () => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', width: 400, margin: 4 }}>
      <CardContent
        sx={{
          py: (theme) => `${theme.spacing(4.125)} !important`,
          height: 100,
        }}
      >
        <Box
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        ></Box>
      </CardContent>
    </Card>
  );
};

export default CardButtons;
