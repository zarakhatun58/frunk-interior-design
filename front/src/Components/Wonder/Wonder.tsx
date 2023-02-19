import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Grid } from '@mui/material';

const steps = [
  'Meet Designer',
  'Confirm order',
  'Virtual Design',
  'Installation Begins',
  'Move In'
];

const Wonder=()=> {

  return (
    <Box sx={{ width: '100%', height:"150px" }}>
        <Grid>
        Wondering How it works ?
        </Grid>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} sx={{
            '& .MuiStepLabel-root .Mui-completed': {
                color: 'yellow', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
              {
                color: 'grey.500', // Just text label (COMPLETED)
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: 'grey.500', // circle color (ACTIVE)
              },
          }}>
            <StepLabel style={{color:"gray"}}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default Wonder;