import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Grid } from '@mui/material';
import {useState} from 'react';

const steps = [
  'Meet Designer',
  'Confirm order',
  'Virtual Design',
  'Installation Begins',
  'Move In'
];

const Wonder = () => {
  const[currentStep, setCurrentStep]=useState();

  return (
    <Box sx={{ width: '100%', height: "200px", backgroundColor: "#f0f2f4", margin:"auto" }}>
      <Grid style={{
        color: "black",
        fontWeight: "600",
        paddingTop: "30px",
        paddingBottom: "30px"
      }}>
        Wondering How it works ?
      </Grid>
      <Stepper activeStep={currentStep} alternativeLabel>
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
            '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            {
              color: 'grey.500', // Just text label (ACTIVE)
            },
          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            color:"black",
            fill: 'black',
            width:"30px" // circle's number (ACTIVE)
          },
          '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root': {
           width:"2em !important",
           height:"2em !important",
           display:"block",
            fill:" yellow",
        }
          }}>
            <StepLabel style={{ color: "gray" }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default Wonder;