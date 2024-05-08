import React from 'react'
import "./letsgetstarted.scss"
import { uiIconSvgLink } from '../../../content.js'


const Letgetstarted = () => {
  return (
    <div className="let-get-started">
           {uiIconSvgLink["illustrationEmpty"]}
            <h1>Let’s get you started</h1>
            <p>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
          </div>
  )
}

export default Letgetstarted