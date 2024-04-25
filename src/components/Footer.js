import React from 'react'
import Footer_connect from './Footer_connect';
import Appstore from './Appstore';
import Ul_coloumn_one from './Ul_coloumn_one';

export default function Footer() {
        return (
                <div className='flex w-[90%] justify-between m-auto mb-32'>
                        <Footer_connect></Footer_connect>
                        <Ul_coloumn_one></Ul_coloumn_one>
                        <Appstore></Appstore>
                </div>
        )
}
