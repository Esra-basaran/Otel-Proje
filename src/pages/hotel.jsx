import React from 'react';
import {Box,ImageList,ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import Oda1 from '../images/ortak1.jpg';
import Oda2 from '../images/ortak2.jpg';
import Oda3 from '../images/ortak3.jpg';
import Oda4 from '../images/ortak4.jpg';
import Oda5 from '../images/ortak5.jpg';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {Pagination,PaginationItem,Stack  }from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

  
  
 function Hotel() {
    const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(3);

  const handlePageChange = (event, value) => {
    setCurrentPage(value); 
    switch (value) {
      case 1:
        navigate('/rooms');
        break;
      case 2:
        navigate('/pool'); 
        break;
      default:
        navigate('/hotel'); 
        break;
    }
  };
  return (
    <>
    <Box sx={{width:"85%",margin:"auto",marginTop:"50px",marginBottom:"100px"}}>
        <Typography variant='h4' component="div" fontWeight={600} align='center' sx={{marginBottom:"50px"}}>Otel İçi Kullanım Alanlarımız </Typography>
       <ImageList  cols={3}  variant="masonry"gap={20} >
          <ImageListItem >
            <img src={Oda4} loading="lazy"/>
          </ImageListItem>  
          <ImageListItem >
            <img src={Oda1} loading="lazy"/>
          </ImageListItem>
          <ImageListItem >
            <img src={Oda2} loading="lazy"/>
          </ImageListItem>
          <ImageListItem >
            <img src={Oda3} loading="lazy"/>
          </ImageListItem>
          <ImageListItem >
            <img src={Oda5} loading="lazy"/>
          </ImageListItem>
      </ImageList>
    </Box>
    <Stack spacing={2} alignItems="center" sx={{marginBottom:"120px"}}>
      <Pagination
        count={3}
        page={currentPage}
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
export default Hotel;