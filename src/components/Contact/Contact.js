import React from 'react'
import { Element } from 'react-scroll'
import {IconButton} from '@mui/material'
import { LinkedIn,GitHub, Twitter, Instagram} from '@mui/icons-material'

import './Contact.css'

const  Contact=()=> {
  return (
    <Element id="contact" className='contact_container'>
            <h1>Contact</h1>                    

            <div className='contactIcons'>
                <a href=" https://www.linkedin.com/in/yugandhar-naik/">
                    <IconButton>
                        <LinkedIn className='iconSize' />                        
                    </IconButton>
                </a>
                <a href="https://www.instagram.com/it_call_me_lucky/">
                    <IconButton>
                        <Instagram className='iconSize' />                        
                    </IconButton>
                </a>
                <a href="https://github.com/YugandharNaik22">
                    <IconButton>
                        <GitHub className='iconSize' />                        
                    </IconButton>
                </a>
                <a href="https://twitter.com/Balu42284020">
                    <IconButton>
                        <Twitter className='iconSize' />                        
                    </IconButton>
                </a>
            </div>
            <p className='copyright'>Copyright   
                        
                                     2024. All rights served
            </p>
        
    
    </Element>
   
  )
}

export default Contact