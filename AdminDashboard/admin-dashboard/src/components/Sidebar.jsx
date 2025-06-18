import React from 'react'
import '../css/sidebar.css'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom'
import { Drawer, IconButton } from '@mui/material';

function Sidebar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="menu-btn" size='large' aria-label='menu' onClick={() => setOpen(true)}>
                <MenuIcon sx={{ position: 'absolute', top: 20, left: 20, fontSize: 30, backgroundColor: "rgb(71,70,70)", color: 'white' }} />
            </div>
            <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
                <div className='sidebar'>
                    <div className='title'>
                        <h3>LOGO</h3>
                    </div>
                    <div className='page-buttons'>
                        <Link to="/"><HomeIcon className='sidebar-icon' /> Home</Link>
                        <Link to="/add-products"><AddIcon className='sidebar-icon' /> Add Product</Link>
                        <Link to="/products"><ProductionQuantityLimitsIcon className='sidebar-icon' />Product List </Link>
                    </div>

                </div>
            </Drawer>

        </>
    )
}

export default Sidebar