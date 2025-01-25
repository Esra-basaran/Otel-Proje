
import img1 from '../images/header2.jpg';
import {Stack,Box,Grid,TextField,Typography,InputAdornment,Button, Divider } from '@mui/material';
import DraftsIcon from '@mui/icons-material/Drafts';

function SubFooter(){
    return(
        <Box sx={{ backgroundImage: `url(${img1}) `,backgroundPosition:"end",backgroundSize:"cover",height:"300px"}} >
        <Box sx={{width:"100%" ,height:"300px",position:"absolute",left:"0px" ,right:"0px", backgroundColor: 'rgba(0, 0, 0, 0.5)'}} />
        <Typography variant="h4" component="div" fontWeight={500} align='center' sx={{paddingTop:'40px',zIndex:3}}>
           Eposta ile Kayıt OLun
        </Typography>
        <Typography variant='body2' componenet="p"sx={{width:"600px",marginLeft:"auto",marginRight:"auto",textAlign:"center",marginTop:"20px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, commodi quod maiores sed maxime nihil incidunt </Typography>
        <Stack direction="row" justifyContent="center" alignContent="end" sx={{marginTop:"25px"}}>
            <TextField label="Email" variant="filled" align="center"  sx={{width:"30%",backgroundColor:"white",marginTop:"1px"}}
             InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DraftsIcon/>
                  </InputAdornment>
                ),
              }}
            />
            <Button color="error" variant="contained">GÖNDER</Button>
        </Stack>
     </Box>
    )

}
export default SubFooter;