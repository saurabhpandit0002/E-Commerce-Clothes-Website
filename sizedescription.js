import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: '1px solid transparent', // Initial border
  '&:hover': {
    border: '1px solid blue', // Border color on hover
  },
}));

export default function BasicGrid1() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
      <Grid item xs={3} style={{
  position: 'relative', // Needed for the overlay
  pointerEvents: 'none', // Prevent interaction
  opacity: 0.5,          // Makes the item look disabled
  
}}>
  <Item style={{
    textDecoration: 'line-through', // Adds the crossed-out effect
    color: 'grey' // Optional: Change text color to indicate disabled state
  }}>
    XXS
  </Item>
</Grid>

        <Grid item xs={3}>
          <Item>XS</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>S</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>M</Item>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ marginTop: '10px' }}>
        <Grid item xs={3}>
          <Item>L</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>XL</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>2XL</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>3XL</Item>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ marginTop: '15px'  }}>
        <Grid item xs={12} >
          <Item style={{height:'20px', color :'white',backgroundColor:'blue',
            display: 'flex',alignItems: 'center',justifyContent: 'center '}}>
            <strong>Add to bag</strong></Item>
        </Grid>
        </Grid>
    </Box>
  );
}
