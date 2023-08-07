import React, { useEffect, useState } from 'react'
import { DOWNLOAD_APP_URL } from '../utils/config';

const DownloadContainer = ({
    isFlex=false
}) => {
  return (
<div className={isFlex? 'flex justify-between p-3': ''}>
        <button className={'rounded-xl bg-yellow-400 h-14 w-72 '} onClick={()=>{
            window.open(
                DOWNLOAD_APP_URL,
                '_blank' 
              );
        }} >Download</button> 
        <div className='text-xs pt-1'>
            <h6>Thank you for your interest in the Uni Card.</h6>
           <h6>Download the Uni Cards app now and get your Uni Card in minutes
            </h6>
           </div>
        </div>
  )
}

export default DownloadContainer