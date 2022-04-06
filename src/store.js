import {configureStore} from '@reduxjs/toolkit'
import dataReducer from './feature/dataSlice';
import { logger } from './feature/middleware';

export const store = configureStore({

    reducer:{
        data: dataReducer
    },
     middleware: [logger]
})