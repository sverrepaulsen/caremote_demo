import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <div className='header_icon'>
                <Link to='/'>
                    <img
                        className="icon"
                        src="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/logotype-v2/image_uploads/9c96a8d0-c9a3-421f-ad01-be1f4cb1b74d/original.png"
                        alt=""
                    />
                </Link>
            </div>
            <div className='header_center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header_right'>
                <div className='header_right_middle'>
                    <LanguageIcon />
                    <ExpandMoreIcon />
                </div>
                <Avatar />
            </div>
        </div>
    )
}

export default Header
