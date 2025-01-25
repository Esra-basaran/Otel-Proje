import React from 'react';
import {Stack,Box,Grid,TextField,Typography,InputAdornment,Button, Divider } from '@mui/material';
import DraftsIcon from '@mui/icons-material/Drafts';
import {List,ListItem,ListItemText,ListItemAvatar,Avatar} from '@mui/material';

import Instagram  from '../images/instagram.jpg';
import Facebook from '../images/facebook.jpg';
import WhatsApp  from '../images/whatsap.jpg';

function Footer (){
 return (
    <>
     <div className='container'>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginTop:"30px"}}>
            <Grid item xs={6} md={3} lg={3} align="center" >
                <Typography variant='body2' fontWeight={700} sx={{marginBottom:"10px"}}>Visit</Typography>
                <ul className='footerList'>
                    <Divider orientation='horizontal'  />
                    <li>Find a hotel</li>
                    <li>Find a restaurant</li>
                    <li>Find a meeting room</li>
                    <li>Find a special offer</li>
                    <li>Find a special offer</li>
                </ul>
            </Grid>
            <Grid item xs={6} md={3} lg={3} align="center">
                <Typography variant='body2' fontWeight={700} sx={{marginBottom:"10px"}}>Destinations</Typography>
                <ul className=' footerList'> 
                    <Divider orientation='horizontal'  />
                    <li>About us</li>
                    <li>ibis budget</li>
                    <li>ALL Plus ibis</li>
                    <li>South America</li>
                    <li>South America  ıbıs</li>
                    <li>ibis budget</li>
                    <li>ALL Plus ibis</li>
                </ul>
            </Grid>
            <Grid item xs={12} md={3} lg={3} align="center">
                <Typography variant='body2' fontWeight={700} sx={{marginBottom:"10px"}}>Mobile APP</Typography>
                <ul className='footerList'>
                    <Divider orientation='horizontal'  />
                    <li>Find a hotel</li>
                    <li>Find a restaurant</li>
                    <li>Find a meeting room</li>
                </ul>
            </Grid>
            <Grid item xs={12} md={3} lg={3} align="center">
                <Typography variant="body1" component="p" fontWeight={700} sx={{marginBottom:"10px"}}> Sosyal Medya </Typography>
                <Divider/>
                <List sx={{textAlign:"center"}}>
                    <ListItem >
                        <ListItemAvatar>
                        <Avatar src={Instagram } />
                        </ListItemAvatar>
                        <ListItemText primary="İnstagram Adresi " secondary="PetravanaOtel1453" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar src={Facebook}/>
                        </ListItemAvatar>
                        <ListItemText primary="Facebook Adresi" secondary="PetravanaOtel" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar src={ WhatsApp }/>
                        </ListItemAvatar>
                        <ListItemText primary="Whatsapp Hattımız" secondary="0532 123 45 78" />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
        <div className='row'>
            <Divider/>
           <Typography variant='body3' sx={{fontSize:"13px",textAlign:"center",padding:"12px 0px "}}>Copyright 2024 © Tüm Hakları Saklıdır.</Typography>
        </div>
     </div>
    </>
)
}
export default Footer;
