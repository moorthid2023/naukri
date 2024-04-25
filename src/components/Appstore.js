import React from 'react';
import android from "./android-app_v1.png";
import ios from "./ios-app_v1.png";

export default function Appstore() {
        return (
                <div className=' w-[350px] border rounded-2xl p-2'>
                        <p className='font-bold p-2'>Apply on the go</p>
                        <p className='text-sm px-2'>Get real-time job updates on our App
                        </p>
                        <div className='flex py-2 *:mx-2'>
                                <img src={android} alt='google playstore'></img>
                                <img src={ios} alt='apple play store'></img>
                        </div>
                </div>
        )
}
