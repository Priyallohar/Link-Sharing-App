import React from 'react'
import "./Preview.scss"
import MobilePreview from '../Links/MobilePreview'

const Preview = () => {
  return (
    <div className='preview-outer-container'>
         <MobilePreview></MobilePreview>
         {/* <div className='outer-personal-details'> */}
         <div className='personal-details'>
         <div className="header-part">
            <h2>Profile Details</h2>
            <p>
            Add your details to create a personal touch to your profile.
            </p>
          </div>
          {/* </div> */}
         </div>
    </div>
  )
}

export default Preview