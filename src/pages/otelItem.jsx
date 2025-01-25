import {Typography,Card ,CardActions,CardContent,CardMedia,Button,Alert} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useDispatch} from 'react-redux';

import{calculateTotal, secilenOtelGoster, sepetEkle,sepetSil} from '../store/basketSlice';



function OtelItem ({title,content,price,image,id,adet,total}){
    const dispatch = useDispatch();

    const handleSepet = ()=>{
        dispatch(sepetEkle(id));
        dispatch(calculateTotal({ price, adet,id }));
        dispatch(secilenOtelGoster({ id, title ,price,image }));
    }
    const handleSil = ()=>{
        dispatch(sepetSil(id));

    }
return(
    <> 
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 200 }} image={image} />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight={600}>{title}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {content}
        </Typography>
        </CardContent>
        <Typography variant="body1" component="div" fontWeight={600} fontSize={18} sx={{paddingLeft:"16px",paddingRight:"16px"}}>{price} TL </Typography>
        <CardActions sx={{marginLeft:"10px",marginBottom:"10px",marginTop:"7px"}}>
            <Button size="small" color='error' variant="contained" startIcon={< DeleteOutlineIcon />}  onClick={handleSil}>Sil</Button>
            <Button size="small" color="primary" variant="contained" onClick={handleSepet} >Sepete Ekle</Button>
        </CardActions>
       
    </Card>
    </>
 )
}

export default OtelItem;



