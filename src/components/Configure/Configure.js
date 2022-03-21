import React from "react";
import './Configure.css'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'; 
import { useNavigate } from "react-router-dom";
import { hideConfigureDialog } from "./configureDialogSlice";
import AutocompleteBoxes from "../AutocompleteBoxes/AutocompleteBoxes";
import PriceSlider from "../PriceSlider/PriceSlider";

export default function Configure() {
    const navigate = useNavigate();  
    const show = useSelector((state) => state.configure_dialog.show)
    
    const dispatch = useDispatch()

    
    const handleClose = (nav = false) => {
        if(nav === true)
        {
            dispatch(hideConfigureDialog());
            navigate('/store')
        }
        dispatch(hideConfigureDialog());
    };

    return (
        <Dialog open = {show} onClose = {handleClose}>
            <DialogTitle>Create A Disease Configuration</DialogTitle>
            <DialogContent className = "dialog_content">
                <AutocompleteBoxes/>
                <DialogContentText variant = "overline" className = "slider_header">Price Range</DialogContentText>
                <PriceSlider/>
            </DialogContent>
            <DialogActions className="dialog_action">
                <Button variant="contained" onClick = {() => handleClose(true)}>Confirm Configuration</Button>
            </DialogActions>
        </Dialog>
  );
}