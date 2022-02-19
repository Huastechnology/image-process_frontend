import React from 'react'
import Box from '@mui/material/Box';
import SiderLayout from '../Sidebar'
import { DrawerHeader } from '../../../components/Drawer/DrawerEngine'
import './styles.css'
import cabecera from '../../../img/cabecera1.gif'

const LayoutInternal = ({sectionTitle,children}) => {
    return(
        <Box sx={{ display:'flex'}}>
            <SiderLayout />
            <Box component="main" sx={{ flexGrow:1, px:3 }}>
                <DrawerHeader />
                <figure className="cabecera">
                <a href="#">
                <img src={cabecera} alt="" /></a>
                </figure>
                <section className='portadaTec'>
                <h3>SECRETARÍA DE EDUCACIÓN PÚBLICA</h3>
                    <p>TECNOLÓGICO NACIONAL DE MÉXICO</p>
                    <p>INSTITUTO TECNOLÓGICO DE MÉRIDA</p>
                </section>
                <div className='headerTitle'>
                    <h1>{sectionTitle}</h1>
                </div>
              
                <div style={{margin:"24px 16px 0px"}}>
                    <div className='content-hero'
                        style={{
                            padding: 24,
                            minHeight: 400
                        }}
                    >
                        {children}
                    </div>
                </div>
                
                <footer className='footer_hero'>
                 ©2022 by Fernando Herrara Inc. All rights reserved.
                </footer>
            </Box>
        </Box>
    )
}

export default LayoutInternal