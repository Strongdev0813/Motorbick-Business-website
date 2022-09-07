import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './btnn.css'

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button className='btn' type='submit' variant="contained" size="large">BOOK Now</Button>
    </Stack>
  );
}   
