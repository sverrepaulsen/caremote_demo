import React from 'react'
import './Banner.css'
import Button from '@mui/material/Button';
import Search from '../Search/Search';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { showDialog } from '../Search/searchDialogSlice'

function Banner() {
    const navigate = useNavigate();
    const show = useSelector(state => state.search_dialog.show)
    const dispatch = useDispatch()

    return (
        <div className='banner'>
            <div className='banner_search'>
                {show && <Search />}
                <Button onClick={() => dispatch(showDialog())} className='banner_searchButton' variant='contained'>
                    {"Search Codes"}
                </Button>
            </div>
            <div className='banner_info'>
                <h1>Banner Header</h1>
                <h5>
                    Banner Main Text
                </h5>
                <Button onClick={() => navigate('/configure')} variant='contained'>Create Disease Configuration</Button>
            </div>
        </div>
    )
}

export default Banner
