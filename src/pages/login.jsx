import React from 'react';
import{Grid,Box,Stack, Typography, TextField, InputAdornment,OutlinedInput,FormControl,Button,Alert} from '@mui/material';
import Resim1 from '../images/login.jpg';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Resim2 from '../images/snekarbar.jpg';


import {Timeline,TimelineItem ,TimelineSeparator,TimelineConnector,TimelineContent,TimelineDot  } from '@mui/lab';

function Login() {

 //password kısmı
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
return (
  <>
  <div className='container'style={{marginTop:"50px",marginBottom:"100px"}} >
    <Grid container justifyContent="center" sx={{backgroundColor:"white",borderRadius:"15px",height:"500px"}}>
      <Grid item xs={12} md={6} >
          <img src={Resim1} className='loginImg'/>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{padding:"20px",width:"80%",marginLeft:"10%"}}>
          <Typography variant='h5' component="div"  fontWeight={600} sx={{marginTop:"20px"}}>Hoşgeldiniz</Typography>
          <Alert severity='warning' sx={{marginTop:"15px"}}> 2. Rezervasyonda % 35 İndirim Kazan</Alert>
          <Typography variant='body3' component="p" sx={{marginTop:"15px",color:"gray"}}>
            Size Verilen Bilgilerle Giriş Yapabilirsiniz
           </Typography>
          <Stack spacing={4} sx={{marginTop:"10px"}}>
            <TextField  sx={{ m: 1, width: '70%' }}
            InputProps={{startAdornment: <InputAdornment position="start">{<MailOutlineIcon/>}</InputAdornment>}}
            />
            <FormControl sx={{ m: 1, width: '70%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Şifre</InputLabel>
                <OutlinedInput
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? 'hide the password' : 'display the password'
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
            </FormControl>
            <Button variant="contained" sx={{width: '70%' }} >Gönder</Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  </div>
  <div className="container"style={{marginBottom:"200px"}}>
    <div className='row'>
      <div className='col-lg-6'>
        <Typography variant='h5' component="div" fontWeight={600} align='center' sx={{marginBottom:"50px"}}>Otelin Genel İşleyişi</Typography>
        <Timeline position="alternate-reverse">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{marginBottom:"20px"}}>
              <Typography variant='body1' fontWeight={700}>Giriş ve Çıkış Saatleri</Typography>
              <Typography variant='body1' sx={{marginTop:"10px"}}> Otele Giriş :14:00 </Typography>
              <Typography variant='body1'> Otelden Çıkış : 18:00</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot  color="warning"/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent  sx={{marginBottom:"20px"}}>
              <Typography variant='body1' fontWeight={700}>Oda Temizliği ve Bakım</Typography>
              <Typography variant='body1' sx={{marginTop:"10px"}}> Günlük Oda Temizliği - 10:00-12:00</Typography>
              <Typography variant='body1'> Bakım ve Onarım - 12:00-14:00</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success"/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent  sx={{marginBottom:"20px"}}>
              <Typography variant='body1' fontWeight={700}>Etkinlikler ve Aktivite Takvimi</Typography>
              <Typography variant='body1' sx={{marginTop:"10px"}}> Sabah Yoga Seansı - 07:00-08:00</Typography>
              <Typography variant='body1' sx={{marginTop:"10px"}}> Öğle Yemeği - 12:00-13:30</Typography>
              <Typography variant='body1' sx={{marginTop:"10px"}}> Akşam Canlı Müzik Gösterisi - 20:00-22:00</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary"/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent  sx={{marginBottom:"20px"}}>
              <Typography variant='body1' fontWeight={700}>. Özel Teklifler ve Promosyonlar</Typography>
              <Typography variant='body1' sx={{marginTop:"10px"}}> Spa Açılış - 08:00 </Typography>
              <Typography variant='body1'> Spa Kapanış - 22:30   </Typography>
              <Typography variant='body1'> Restoran Açılış - 07:30  </Typography>
              <Typography variant='body1'> Restoran Kapanış - 22:00  </Typography>
              <Typography variant='body1'> Resepsiyon Açılış - 07:00  </Typography>
              <Typography variant='body1'> Resepsiyon Kapanış - 23:00 </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="error"/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent  sx={{marginBottom:"20px"}}>
              <Typography variant='body1' fontWeight={700}>Misafir Deneyimi Yorumları</Typography>
              <Typography variant='body1' sx={{marginTop:"10px"}}>  Müşteri Yorumları - 20:00</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className='col-lg-6'>
        <img src={Resim2} className='w-100' style={{marginTop:"55px"}}/>
      </div>
    </div>
  </div>
  </>
)
}
export default Login;