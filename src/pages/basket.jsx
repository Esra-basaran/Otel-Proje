import React from 'react';
import {Typography,Button,Alert, Divider} from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import OtelItem from './otelItem';
import {useDispatch, useSelector} from 'react-redux';


function Basket() {
  const {toplamFiyat,otelCard,secilenOteller } = useSelector((state) => state.otel);

  const dispatch = useDispatch();

  return (
    <div className='container mt-5 mb-5'>
      <div className='row'>
        <Typography variant="h5" sx={{marginBottom:"20px"}} fontWeight={700}> Rezervasyon </Typography>
        <div className='col-lg-9'>
            <div className='row  mt-3 mb-4'>
            {otelCard.map((item)=>{
                return (
                  <div className='col-lg-4 mb-4'> 
                       <OtelItem {...item} key={item.id}/>
                  </div>
                )}
            )}
            </div>
        </div>
        <div className='col-lg-3'>
            <div className='mt-3'>
              <Typography variant='body3' fontWeight={600}>Yapılan Rezervayonlarınız </Typography>
              <hr/>
              <div>
                {secilenOteller.map((otel)=>{
                    return ( 
                      <>
                       <div {...otel} key={otel.id} className='sepetDiv'> 
                        <img src={otel.image} className='sepetImg' />  
                        <p>{otel.title} : </p>
                        <p>{otel.price }</p>
                      </div>
                      <hr/>
                      </>
                     
                    )}
                )}
              </div>
              <Typography> Ödenecek Toplam Ücret : {toplamFiyat}</Typography>
              <Button sx={{width:"100%",marginTop:"30px"}} color='primary' variant="contained" startIcon={<AddTaskIcon />}>Alışverişi Tamamla</Button>
              <Alert sx={{marginTop:"20px"}} severity='warning'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ullam, consectetur ipsa blanditiis eligendi ea. Voluptatem saepe cupiditate in. Ipsum magnam quaerat accusantium excepturi quia voluptatibus error quidem nihil eum?</Alert>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Basket;