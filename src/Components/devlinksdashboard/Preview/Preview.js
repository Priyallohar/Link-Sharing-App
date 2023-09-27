import React, {useState} from 'react'
import "./Preview.scss"
import MobilePreview from '../Links/MobilePreview'

const Preview = () => {
    const [selectedPhotos, setSelectedPhotos] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedPhotos([...selectedPhotos, ...files]);
  };

  return (
    <div className='preview-outer-container'>
         <MobilePreview></MobilePreview>
         <div className='personal-details'>
         <div className="header-part">
            <h2>Profile Details</h2>
            <p>
            Add your details to create a personal touch to your profile.
            </p>
          </div>

          <div className='add-profile-pic-container'>
            <text>Profile Picture</text>
            <input type='file' accept='image/*' onChange={handleFileChange} />
            <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
          </div>

          
         </div>
    </div>
  )
}

export default Preview