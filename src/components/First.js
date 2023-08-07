import React, { useEffect, useState } from 'react'
import Header from './Header'
import { API_URL, DOWNLOAD_APP_URL, IMG1 } from '../utils/config';
import Arrow from '../assets/Arrow.js';
import DownloadContainer from './DownloadContainer';

const First = () => {
    const [mobile, setMobile] = useState('');
    const [showDownload, setShowDownload] = useState(false);

    // useEffect(()=>{
    //     window.addEventListener('scroll', this.handleScroll);
    // },[])

    function apply(){
        if(mobile.length!==10) return;
        const payload={
            'phone': mobile,
            'commsOptIn': true,
            'utm_params': 'https://www.uni.cards/',
            'form_name': 'Main_Hero_Form',
            'event_name': 'CLEVERTAP_EVENT'
        }
        fetch(API_URL, {
            method: 'POST',
            body: payload,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(response => response.json())
 
        // Displaying results to console
        .then(json => console.log(json));
        setShowDownload(true);
    }
  return (
    <><Header />
    <div className='flex justify-between '>
    <div className='p-4' >
    <div className='font-bold text-5xl break-words' p-4>
        NX Wave. The next-gen credit card for those who love rewards.
    </div>
    <div className='mt-4 mb-4'>
    1% Cashback +  5x Rewards + Zero Forex Markup
    </div>
    {
        showDownload? 
        <DownloadContainer/>: 
        <>
        <input
        type='number' 
        maxlength={10}
        placeholder='Enter Phone Number' 
        className='bg-black text-white rounded-xl' 
        onChange={(e)=>{
            if(mobile.length<10)
                setMobile(e.target.value)
        }}
        >
        </input>
        <button  className='bg-yellow-500 rounded p-3' onClick={()=>{apply()}}>Apply Now</button>
    </>
    }

    </div>
    
    <img src={IMG1} className='w-1/4' alt='card_asset'></img>
    </div>
    </>
  )
}

export default First