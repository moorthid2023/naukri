import React from 'react'
import naukri from "./naukri_logo.svg"
import insta from "./insta.svg"
import fb from "./fb.svg";
import linkedin from "./linkedin.svg";
import twitter from "./twitter.svg";
export default function Footer_connect() {
        return (
                <div className='flex flex-col w-[150px] justify-center '>
                        <img className='py-6' src={naukri} alt='logo'></img>
                        <p className='text-center pb-2'>Connect with us</p>
                        <ul className='flex *:w-6 justify-around opacity-50'>
                                <li><a href=""><img src={fb} alt='fb' /></a></li>
                                <li><a href=""><img src={insta} alt='insta' /></a></li>
                                <li><a href=""><img src={twitter} alt='twitter' /></a></li>
                                <li><a href=""><img src={linkedin} alt='linkedin' /></a></li>
                        </ul>
                </div>
        )
}
