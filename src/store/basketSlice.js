import {createSlice} from '@reduxjs/toolkit';
import otelCard from './otelCard';

const sepetSlice = createSlice({
    name:'otel',
    initialState:{
        otelCard:otelCard,
        toplamFiyat:0,
        secilenOteller : [],
    },
    reducers:{
        sepetEkle: (state, action) => {
            const id = action.payload;
            const item = state.otelCard.find((item) => item.id === id);
            if (item) {
              item.adet += 1; // Ürünün adetini artır
            } else {
                state.otelCard.push({ id, price: action.payload.price, adet: 1 });
            }
        },
        calculateTotal: (state, action) => {
            // Sadece tıklanan otelin fiyatını toplama ekle
            const clickedItem = action.payload;
            state.toplamFiyat += clickedItem.price * clickedItem.adet;
        },
        secilenOtelGoster : (state,action)=>{
            const secilenId = action.payload;
            state.secilenOteller.push(secilenId);
        },
        sepetSil: (state, action) => {
            const id = action.payload;
        
            // Silinecek oteli bul
            const itemToRemove = state.secilenOteller.find((item) => item.id === id);
        
            if (itemToRemove) {
                // secilenOteller dizisinden sil
               state.secilenOteller = state.secilenOteller.filter((item) => item.id !== id); 
           
               state.toplamFiyat -= (itemToRemove.price || 0) * (itemToRemove.adet || 1);

            }
        }
        
        
    }
});
export const {sepetEkle,calculateTotal,secilenOtelGoster,sepetSil} = sepetSlice.actions;
export const sepetReducer = sepetSlice.reducer;