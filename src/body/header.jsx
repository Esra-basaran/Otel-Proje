import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Stack, Box, Snackbar,Link} from '@mui/material';
import Header4 from '../images/3.jpg';
import Logo from '../images/logo2.png';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react';
import {Drawer,Button,List,Divider,ListItem,ListItemButton,ListItemIcon,ListItemText,Alert,Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import AttractionsIcon from '@mui/icons-material/Attractions';
import BedIcon from '@mui/icons-material/Bed';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import CancelIcon from '@mui/icons-material/Cancel';

function Header (){

// = menu kısamı açılması 
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >
        <CancelIcon  size="lg" sx={{marginLeft:"210px",fontSize:"30px",marginTop:"15px",cursor:"pointer"}}  onClick={toggleDrawer(false)}/> 
        <List>
            <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>{<InboxIcon/>}</ListItemIcon>
                <ListItemText  primary="Rezervasyon" />
            </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem  disablePadding>
            <ListItemButton>
                <ListItemIcon>{<LoyaltyIcon/>}</ListItemIcon>
                <ListItemText primary="Kampanyalar" />
            </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>{<BurstModeIcon/>}</ListItemIcon>
                <ListItemText  primary="Galeri" />
            </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>{< BedIcon/>}</ListItemIcon>
                <ListItemText  primary="Otel Odaları" />
            </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>{<AttractionsIcon/>}</ListItemIcon>
                <ListItemText  primary="Ekstra Aktiviteler" />
            </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>{<PhoneForwardedIcon/>}</ListItemIcon>
                <ListItemText  primary="İletişim" />
            </ListItemButton>
            </ListItem>
        </List>
    </Box>
  ); 
  
//arama kısmındaki Snackbar 
  const[search, setSearch] = useState(false);
  const handleSearchClick = ()=>{
    setSearch(true);
  }
  const handleSearchClose = ()=>{
    setSearch(false);
  }

//sayfa yönlendirmesi
  const handleNavigate = () => {
    window.location.href = '/login'; 
  }
  const handleLogoClick = () => {
    window.location.href = '/'; 
  }
  


return (
        <Box sx={{position: 'relative',backgroundImage: `url(${Header4})`, backgroundSize: 'cover', backgroundPosition: 'center',height: '30vh'}} >
             <Snackbar open={search} onClose={handleSearchClose} autoHideDuration={1500} anchorOrigin={{vertical:"top",horizontal:"center"}}>
               <Alert onClose={handleSearchClose} severity="error" variant="filled" sx={{ width: '100%' }}>
                  Seçilen Tarihler Doludur  !
               </Alert>
             </Snackbar>
            <Box sx={{position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',backgroundColor: 'rgba(0, 0, 0, 0.5)'}}/>
            <Box className="menuIcon">
                <img src={Logo} style={{width:"90px",marginLeft:"70px",paddingTop:"33px",zIndex:"99999"}} onClick={handleLogoClick} />
                <Box>
                    <Button variant="contained" sx={{ marginTop: '7px' }}  onClick={handleNavigate}>Giriş Yap</Button>
                    <Tooltip title="menu" ><Button onClick={toggleDrawer(true)} ><MenuIcon sx={{fontSize:"40px",color:"white",marginRight:'25px'}} /></Button></Tooltip>
                    <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
                        {DrawerList}
                    </Drawer> 
                </Box>
            </Box>  
            <Stack direction="row"  justifyContent="center" alignContent="end" 
               sx={{ position: 'relative',marginTop: "0px", gap: {md: 5}}}>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer components={['DatePicker']} >
                        <DatePicker label="Giriş Tarihi" sx={{backgroundColor:'white',borderRadius:"5px",zIndex:1}}/>
                    </DemoContainer>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Çıkış Tarihi" sx={{backgroundColor:'white',borderRadius:"5px",zIndex:1}}/>
                    </DemoContainer>
                </LocalizationProvider>
                <Button variant="contained" color="info" sx={{height:"53px",marginTop:"8px",'&:hover':{backgroundColor:'info.dark'}}} onClick={handleSearchClick}><SearchIcon /></Button>
            </Stack>
        </Box>
);
};
export default Header;