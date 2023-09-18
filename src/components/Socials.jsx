import React from 'react'
import { RiAppleFill, RiFacebookFill, RiGoogleFill } from 'react-icons/ri'

export default function Socials() {
  return (
    <div className='component_icon_section'>
        <a href='!#' className='icon_links'>
            <RiGoogleFill className='google'/>
        </a>
        <a href='!#' className='icon_links'>
            <RiAppleFill className='apple'/>
        </a>
        <a href='!#' className='icon_links'>
            <RiFacebookFill className='facebook'/>
        </a>
    </div>
  )
}
