import React from 'react';
import '../styles/more-sites.css';

/**
 * Displays supplemental site links for larger screens.
 */
export default function MoreSites() {
  
  return (
    <div className='more-sites'>
        <a href='/about' className='site-link'>Über die Seite</a>
        <div className='separator'>|</div>
        <a href='/imprint' className='site-link'>Impressum</a>
        <div className='separator'>|</div>
        <a href='/privacy' className='site-link'>Datenschutz</a>
    </div>
  );
}