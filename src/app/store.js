import { configureStore } from '@reduxjs/toolkit'
import configureDialogReducer from '../components/Configure/configureDialogSlice'
import searchDialogReducer from '../components/Search/searchDialogSlice'

export const store = configureStore({
    reducer: {
        search_dialog: searchDialogReducer,
        configure_dialog: configureDialogReducer,
    },
})