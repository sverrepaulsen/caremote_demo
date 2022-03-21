import React from 'react'
import './Banner.css'
import Button from '@mui/material/Button';
import Search from '../Search/Search';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { showSearchDialog } from '../Search/searchDialogSlice'
import { showConfigureDialog } from '../Configure/configureDialogSlice';
import Configure from '../Configure/Configure';

function Banner() {
    const navigate = useNavigate();
    const showSearch = useSelector(state => state.search_dialog.show)
    const showConfigure = useSelector(state => state.configure_dialog.show)
    const dispatch = useDispatch()

    return (
        <div className='banner'>
            <div className='banner_search'>
                {showSearch && <Search />}
                {showConfigure && <Configure />}
                <Button onClick={() => dispatch(showSearchDialog())} className='banner_searchButton' variant='contained'>
                    {"Search Codes"}
                </Button>
            </div>
            <div className='banner_info'>
                <h1>Banner Header</h1>
                <h5>
                    Banner Main Text
                </h5>
                <Button onClick={() => dispatch(showConfigureDialog())} variant='contained'>Create Disease Configuration</Button>
            </div>
        </div>
    )
}

export default Banner
