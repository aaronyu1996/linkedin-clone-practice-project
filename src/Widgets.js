import React from 'react';
import './Widgets.css';
import { FiberManualRecord, Info } from '@mui/icons-material';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
        <div className="widgets_articleLeft">
            <FiberManualRecord />
        </div>

        <div className="widgets_articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  )

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <Info />
        </div>
        {newsArticle('This is a Clone Linkedin Web App.', 'Built with React, Redux & Firebase.')}
        {newsArticle('Learning develop and deploy a React application', 'Within 3 months')}
        {newsArticle('Dragon Shiba is the best Shiba breeder!', 'Cutest Shiba Inu in Canada')}
    </div>
  )
}

export default Widgets;