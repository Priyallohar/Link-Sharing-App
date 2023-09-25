import React from 'react'
import "./Preview.scss"
import MobilePreview from '../Links/MobilePreview'

const Preview = () => {
  return (
    <div className='preview-outer-container'>
         <MobilePreview></MobilePreview>
         <div className='personal-details'>
         <div className="header-part">
            <h2>Customize you links</h2>
            <p>
              Add/edit/remove links below and then share your profiles with the
              world!
            </p>
          </div>
         </div>
    </div>
  )
}

export default Preview