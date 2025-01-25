import {configureStore} from '@reduxjs/toolkit';
import {sepetReducer} from './basketSlice';

 export  const store = configureStore ({
    reducer:{
        otel:sepetReducer
    }

});
