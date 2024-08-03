import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import shirt from './image/shirts.jpg';
import shirtBlack from './image/blacktshirt.jpg';
import shirtGrey from './image/greyt.jpg';
import shirtWhite from './image/whitet.jpg';
import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Circle } from '@mui/icons-material';
import ResponsiveGrid from './sizedescription';
import BasicGrid1 from './sizedescription';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const reviews = {
  href: '#', // replace with the actual link
  average: 4, // replace with the actual average rating
  totalCount: 117, // replace with the actual total count of reviews
};

const CustomStarIcon = (props) => {
  return (
    <StarIcon
      {...props}
      style={{
        background: 'linear-gradient(90deg,gold 50%, white 50%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        
        fontSize: 'inherit', // Ensure it inherits font size from props if needed
        ...props.style, // Apply any additional styles passed through props
      }}
    />
  );
};


export default function BasicGrid() {
  return (
  
   <container maxWidth="lg">
      <Grid container spacing={4} style={{marginTop:'7px'}}>
        <Grid item xs={12}>
          <div style={{display:'flex', marginTop:'15px', marginLeft:'30px', fontSize:'30px'}}>
            <div><strong> <a href='#' style={{color:"black", marginLeft:"10px", textDecoration:"none"}}>Men</a></strong></div>
            <div style={{marginLeft:'10px', color:"grey"}}>\</div>
            <div><strong> <a href='#' style={{ color:"black", marginLeft:"10px", textDecoration:"none"}}>Clothing</a></strong></div>
            <div style={{marginLeft:'10px', color:"grey"}}>\</div>
            <div> <strong><a href='#' style={{ color:"Grey", marginLeft:"10px", textDecoration:"none"}}>Basic Tee 6-Pack</a></strong></div>
          </div>
          <div style={{display:'flex'}}>
       <Grid container spacing={6}>

            <Grid item xs={4} >
            <img src={shirt} alt='xd' style={{width:"100%",height:"93%",marginLeft:"41px" ,marginTop:'20px', borderRadius:'8px'}}></img>
            </Grid>
            <Grid item xs={4} >
           <Grid>
           <img src={shirtBlack} alt='xd' style={{width:"100%",marginLeft:"25px" ,marginTop:'20px', borderRadius:'8px'}}></img>
           </Grid>
           <img src={shirtGrey} alt='xd' style={{width:"100%",height:'43%',marginLeft:"25px" ,marginTop:'20px', borderRadius:'8px'}}></img>
           </Grid>
            <Grid item xs={4}>
            <img src={shirtWhite} alt='xd' style={{width:"90%",height:'93%',marginLeft:"13px" ,marginTop:'20px', borderRadius:'8px'}}></img>
            </Grid>
        </Grid>
          </div>
        </Grid>
          <div style={{display:'flex'}}>
        <Grid container spacing={5.5}>
          <Grid item xs={7.7} style={{width:"100%",marginLeft:'71px'}} >
            
          <h1>Basic Tee 6-Pack</h1>
          <Typography  style={{fontSize:'120%'}}>
            <p>The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale</p><p>options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive</p> colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</Typography>
            <Typography style={{marginTop:'40px'}}>Highlight</Typography>
              <ul style={{color:'gray'}}>
                <li>Hand cut and sewn locally</li>
                <li>Dyed with our proprietary colors</li>
                <li>Pre-washed & pre-shrunk</li>
                <li>Ultra-soft 100% cotton</li>
              </ul>
              <Typography style={{marginTop:"40px"}}>
                Details
              </Typography>
              <Typography style={{color:'gray',marginTop:"10px", marginBottom:"20%"}}>
              The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.
              </Typography>
            
          </Grid>
          <Divider orientation="vertical" flexItem  style={{height:"80%",marginTop:'70px'}}/>
        
          <Grid item xs={3}>
           <Typography  style={{fontSize:'xx-large',textAlign:'left',marginTop:"20px"}}>
            $192
           </Typography>  
           <div style={{ display: 'flex', alignItems: 'center' }}>
              <Rating value={reviews.average} readOnly precision={0.5} IconContainerComponent={CustomStarIcon}/>
              <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: '8px',color:'blue' }}>
                {reviews.totalCount} reviews  
                </Typography>
                </div>

                <div style={{marginTop:"45px" }}> 
                <Typography><h2>Color &nbsp;</h2> </Typography> 
                <div style={{
                               width: '60px',
                               height: '60px',
                               borderRadius: '50%', // Makes the div a circle
                                   backgroundColor: 'white', // Sets the color of the circle
                                   display: 'inline-block', // Ensures the circle fits the content
                                     margin: '0 5px', // Adds some spacing between circles
                                     border: '2px solid grey'
                                    }}></div>
                                    <div style={{
                                     width: '60px',
                                      height: '60px',
                                        borderRadius: '50%', 
                                        backgroundColor: '#D3D3D3',
                                          display: 'inline-block', 
                                                margin: '0 5px',
                                                border:'2px solid grey' 
                                                }}></div>

                                                
                                    <div style={{
                                     width: '60px',
                                      height: '60px',
                                        borderRadius: '50%', 
                                        backgroundColor: 'black',
                                          display: 'inline-block', 
                                                margin: '0 5px',
                                                border:'2px solid black' 
                                                }}></div>
                  {/* <label for='color'><h4>Color</h4></label>
                  <input type='radio' id="color" name="mycolor" color='red' ></input> */}
                </div>
                <div>
                <Typography><h2>Size</h2> </Typography>
                  <BasicGrid1/>
                </div>
                

            </Grid>
  
          
        </Grid>
          </div>
      </Grid>
   </container>
            
  );
}

