import React from 'react';
import './Search.css';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { hideDialog } from '../Search/searchDialogSlice'

function Search() {
    const show = useSelector((state) => state.search_dialog.show)
    const dispatch = useDispatch()
    
    const handleClose = () => {
        dispatch(hideDialog());
    };

    return (
        <div>
            <Dialog open={show} onClose={handleClose}>
                <DialogTitle>Enter a Code</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter a prescribed disease configuration code to see recommended products
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Configuration Code"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Search Code</Button>
                </DialogActions>
            </Dialog>
        </div>
        
    )
}

export default Search
