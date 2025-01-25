import React from 'react';
import {Box,Stack, Typography,Button, Divider, Breadcrumbs, ImageList, ImageListItemBar,ImageListItem} from '@mui/material';
import {Accordion,AccordionSummary,AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import{useState} from'react';
import{MenuItem,FormControl,Select,SelectChangeEvent,InputLabel,Slider,Link} from '@mui/material';
import{Checkbox , RadioGroup,FormControlLabel}from'@mui/material';
import {BottomNavigation,BottomNavigationAction}from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

import Resim1 from '../images/havuzotel2.jpg';
import Resim2 from '../images/yatak1.jpg';
import Resim3 from '../images/spa.jpg';
import Resim4 from '../images/ic1.jpg';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import PlaceIcon from '@mui/icons-material/Place';
import BedIcon from '@mui/icons-material/Bed';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import VillaIcon from '@mui/icons-material/Villa';

import Otel1 from '../images/oda.jpg';
import Otel2 from '../images/oda2.jpg';
import Otel3 from '../images/oteliç.jpg';
import Otel4 from '../images/yemek3.jpg';
import Otel5 from '../images/havuz1.jpg';
import Otel6 from '../images/resepsion.jpg';
import SubFooter from '../body/subFooter';



import {SpeedDial,SpeedDialIcon,SpeedDialAction}from '@mui/material';

import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';

function valuetext(value: number) {
    return `${value}°C`;
  }
  
  const minDistance = 10;

function Home(){

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];
  

  //oda seçimi select
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
  

  //fiyat seçimi slider
    const [value1, setValue1] = React.useState([20, 37]);
    const handleChange1 = (event: Event,newValue: number | number[],activeThumb: number,) => {
        if (!Array.isArray(newValue)) {
        return;
        }
        if (activeThumb ===0) {
        setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
        setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };
//sayfa yönlendirmesi  
    const handleRooms = () => {
        window.location.href = '/rooms'; 
    }
    const handlePool = () => {
        window.location.href = '/pool'; 
    }
    const basketClick = () =>{
        window.location.href = '/basket'; 
    }
return (
    <> 
   <Box sx={{marginTop:"70px",paddingBottom:"110px"}}>
        <div className='container'>
            <div className='row'>
                <div  className='col-lg-3 filter'>
                    <Stack direction="row" spacing={3} justifyContent="space-between" sx={{padding:"10px 0px"}}>
                        <Typography variant='h6' component="div">Filtrele</Typography>
                        <Button variant="contained" color="warning">Filtrele</Button>
                    </Stack>
                    <Divider/>
                    {/* kişi sayısı*/}
                    <Accordion sx={{marginTop:"12px",marginBottom:"15px"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}aria-controls="panel1-content"id="panel1-header">Kişi Sayısı </AccordionSummary>
                        <AccordionDetails >
                        <Button variant="outlined"  color="warning" sx={{margin:"0px 5px"}}>1</Button>
                        <Button variant="outlined"  color="warning" sx={{margin:"0px 5px"}}>2</Button>
                        <Button variant="outlined"  color="warning" sx={{margin:"0px 5px"}}>Vıp</Button>
                        </AccordionDetails>
                    </Accordion>
                    {/* oda seceneği */}
                    <Accordion sx={{marginTop:"12px",marginBottom:"15px"}} >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}aria-controls="panel2-content"> Oda Seçenekleri </AccordionSummary>
                        <AccordionDetails >
                        <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Seç</InputLabel>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age"onChange={handleChange} color="warning">
                                    <MenuItem value={10}>Standart</MenuItem>
                                    <MenuItem value={20}>Ekonomik</MenuItem>
                                    <MenuItem value={30}>Suit</MenuItem>
                                </Select>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>
                    {/* fiyat  seceneği */}
                    <Accordion sx={{marginTop:"12px",marginBottom:"15px"}} >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}aria-controls="panel3-content"> Fiyat Aralığı </AccordionSummary>
                        <AccordionDetails >
                            <Slider getAriaLabel={() => 'Minimum distance'} value={value1} onChange={handleChange1} valueLabelDisplay="auto" getAriaValueText={valuetext}disableSwap color="warning"/>
                        </AccordionDetails>
                    </Accordion>
                    {/*Eksrtra secenekler */}
                    <Accordion sx={{marginTop:"12px",marginBottom:"15px"}} >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content"> Ekstralar </AccordionSummary>
                        <AccordionDetails >
                        <FormControl >
                                <FormControlLabel value="yemek"  control={<Checkbox  color='warning'/>} label="Kahvaltı" />
                                <FormControlLabel value="oyun"  control={<Checkbox   color='warning'/>} label="Çocuk Oyun Alanları" />
                                <FormControlLabel value="havuz" control={<Checkbox   color='warning'/>} label="Islak Kullanım Alanı" />
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='col-lg-6 sliderCol'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <img src={Resim1} style={{borderRadius:"25px",width:"100%"}}/>
                        </div>
                    </div>
                    <div className='row mt-4'>    
                        <div className='col-lg-4 '>
                             <img src={Resim2} style={{borderRadius:"7px",width:"100%"}}/>
                        </div>
                        <div className='col-lg-4'>
                            <img src={Resim3} style={{borderRadius:"7px",width:"100%"}}/>
                        </div>
                        <div className='col-lg-4'>
                            <img src={Resim4} style={{borderRadius:"7px",width:"100%"}}/>
                        </div>
                    </div> 
                </div>
                <div className='col-lg-3 ' style={{padding:"0px 50px"}}>
                    <Typography variant='h5' component="div" fontWeight={700} align='center' sx={{marginBottom:"20px"}}>ŞEHİR MERKEZİNDE LÜKS ODALAR</Typography>
                    <Divider>Özellikleri</Divider>
                    <Breadcrumbs aria-label="breadcrumb" separator="/" sx={{marginTop:"20px"}}>
                   <Typography><PlaceIcon/> ANTALYA</Typography>
                   <Typography>KALKAN</Typography>
                    </Breadcrumbs>
                    <Typography variant='body2' component="p" fontWeight={500} align='center' sx={{marginTop:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos ad consequuntur officiis praesentium nostrum corporis illo vel deserunt officia deleniti, sunt optio sequi voluptatibus eveniet repudiandae veniam. Sequi, vero?</Typography>
                    <BottomNavigation showLabels sx={{marginTop:"20px"}} >
                       <BottomNavigationAction label="Recents" icon={<BedIcon />} />
                       <BottomNavigationAction label="Favorites" icon={<PeopleAltIcon />} />
                       <BottomNavigationAction label="Nearby" icon={<DinnerDiningIcon />} />
                    </BottomNavigation>
                    <Typography variant='body3'  fontWeight={600} component="p" sx={{marginTop:"30px"}}> Ücrete Dahil Olanlar</Typography>
                    <ul className='listEkstra'>
                        <li>İki Kişilik Serpme Kahvaltı</li>
                        <li>Islak Alan Kullanımı</li>
                        <li>Çocuklar İçin Etkinlikler</li>
                        <li>Sınırsız Alkollu İçecekler</li>
                        <li>Yetişkin Etkinlikleri</li>
                        <li>Atv Turu</li>
                        <li>Beach Turu</li>
                    </ul>
                    <Button size="lg" variant="contained" color="info" sx={{width:"100%",'&:hover' :{backgroundColor:"info.light"}}} onClick={basketClick}>İncele</Button>
                </div>
            </div>
        </div>
   </Box>
   <Box>
     <div className='container'>
        <Typography  variant='h5' fontWeight={500} component="div" sx={{marginBottom:"20px"}}> <VillaIcon sx={{marginRight:"7px"}}/>Otel Kullanım Alanları</Typography>
        <div className='row  p-5' style={{backgroundColor:"white", borderRadius:"15px"}}>
            <div className='col-lg-12'>
                <ImageList cols={6} rowHeight={200}>
                    <ImageListItem>
                        <img src={Otel1}  onClick={handleRooms}/>
                        <ImageListItemBar title="Balayı Odaları"/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src={Otel5}  onClick={handlePool}/>
                        <ImageListItemBar title="Havuz Alanları"/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src={Otel6}/>
                        <ImageListItemBar title="Lobi Alanları"/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src={Otel4}/>
                        <ImageListItemBar title="Restorant Alanları"/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src={Otel3}/>
                        <ImageListItemBar title="Otel İçi Kullanım Alanları"/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src={Otel2}/>
                        <ImageListItemBar title="Aile Odaları"/>
                    </ImageListItem>
                </ImageList>
            </div>
        </div>
    </div>
   </Box>
   <SpeedDial ariaLabel="SpeedDial basic example" sx={{ position: 'fixed', bottom: 16, right: 16 }}icon={<SpeedDialIcon />}>
        {actions.map((action) => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name}/>
        ))}
    </SpeedDial>
   <SubFooter/>
   </>
  )
}
export default Home;