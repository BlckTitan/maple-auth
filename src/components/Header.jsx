import React from 'react';
import '../style/header_style.css';
import { RiPlantFill } from 'react-icons/ri';

export default function HeaderComponent() {
  return (
    <main className='componentContainer componentContainer--full'>
        <header className='header'>
            
            <i className='icon icon--xl'><RiPlantFill/></i>
            <a href='#!' className='header-text'>
                MapleAuth
            </a>
        </header>
    </main>
  )
}
