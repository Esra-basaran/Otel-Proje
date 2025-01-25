import React from 'react';
import {Box,ImageList,ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import Oda1 from '../images/oda.jpg';
import Oda2 from '../images/oda1.jpg';
import Oda3 from '../images/oda2.jpg';
import Oda4 from '../images/oda3.jpg';
import Oda5 from '../images/oda4.jpg';
import Oda6 from '../images/oda5.jpg';
import Oda7 from '../images/oda6.jpg';

import {Pagination,PaginationItem,Stack  }from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from 'react-router-dom';


function Rooms() {
  const navigate = useNavigate();

  const handlePageChange = (event, value) => {
    // Sayfa numarasına göre yönlendirme yapın
    switch (value) {
      case 1:
        navigate('/rooms'); // Örnek: "Home" sayfası
        break;
      case 2:
        navigate('/pool'); // Örnek: "Pool" sayfası
        break;
      // Diğer sayfalar için case blokları ekleyin
      default:
        navigate('/hotel'); // Varsayılan yönlendirme
        break;
    }
  };
  return (
   <>
    <Box sx={{width:"85%",margin:"auto",marginTop:"50px",marginBottom:"100px"}}>
        <Typography variant='h4' component="div" fontWeight={600} align='center' sx={{marginBottom:"50px"}}>Odalarımız </Typography>
       <ImageList  cols={3}  variant="masonry"gap={20} >
          <ImageListItem >
            <img src={Oda1} loading="lazy"/>
            <ImageListItemBar title="Deluxe Süit"subtitle="Deniz manzaralı, 2 kişilik, ücretsiz Wi-Fi"/>
          </ImageListItem>
          <ImageListItem >
            <img src={Oda2} loading="lazy"/>
            <ImageListItemBar title="Deluxe Süit"subtitle="Deniz manzaralı, 2 kişilik, ücretsiz Wi-Fi"/>
          </ImageListItem>
          <ImageListItem >
            <img src={Oda3} loading="lazy"/>
            <ImageListItemBar title="Deluxe Süit"subtitle="Deniz manzaralı, 2 kişilik, ücretsiz Wi-Fi"/>
          </ImageListItem>
          <ImageListItem >
            <img src={Oda4} loading="lazy"/>
            <ImageListItemBar title="Deluxe Süit"subtitle="Deniz manzaralı, 2 kişilik, ücretsiz Wi-Fi"/>
          </ImageListItem>
          <ImageListItem >
            <img src={Oda5} loading="lazy"/>
            <ImageListItemBar title="Deluxe Süit"subtitle="Deniz manzaralı, 2 kişilik, ücretsiz Wi-Fi"/>
          </ImageListItem>
          <ImageListItem >
            <img src={Oda6} loading="lazy"/>
            <ImageListItemBar title="Deluxe Süit"subtitle="Deniz manzaralı, 2 kişilik, ücretsiz Wi-Fi"/>
          </ImageListItem>
          <ImageListItem >
            <img src={Oda7} loading="lazy"/>
            <ImageListItemBar title="Deluxe Süit"subtitle="Deniz manzaralı, 2 kişilik, ücretsiz Wi-Fi"/>
          </ImageListItem>
      </ImageList>
    </Box>
    <Stack spacing={2} alignItems="center" sx={{marginBottom:"120px"}}>
      <Pagination
        count={3}
        onChange={handlePageChange}
        renderItem={(item) => (
          <PaginationItem 
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
   </>
  )
}
export default Rooms;