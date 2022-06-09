/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './styles.css';
const Header = () => {
  return (
    <header>
      <div className='header-inner-left'>
        <div className='icon'>
          <img className='dashboard-icon' src="images/dashBoard.png"></img>
        </div>
        <div className='dashboard'>
          <a class='dashboard-link' href='https://www.facebook.com/'>Dashboard</a>
        </div>
        <div className='dashboard'>
          <a class='dashboard-link' href='https://www.facebook.com/'>Projects</a>
        </div>
        <div className='dashboard'>
          <a class='dashboard-link' href='https://www.facebook.com/'>Recently Viewed</a>
        </div>
        <div className='dashboard'>
          <a class='dashboard-link' href='https://www.facebook.com/'>Filters</a>
        </div>
        <div className='icon'>
          <img className='plus-icon' src="images/headerPlus.png"></img>
        </div>
        <div className='upgrade'>
          <a class='upgrade-link' href='#'>Upgrade</a>
        </div>
      </div>
      <div className='header-inner-right'>
      <div className='icon'>
          <img className='help-icon' src="images/icon-ellipsis.png"></img>
        </div>
        <div className='icon'>
          <img className='help-icon' src="images/icon-eye.png"></img>
        </div>
        <div className='icon'>
          <img className='help-icon' src="images/icon-notice.png"></img>
        </div>
        <div className='icon'>
          <img className='help-icon' src="images/icon-help.png"></img>
        </div>
        <div className='icon'>
          <img className='avatar-icon' src="images/avatar.png"></img>
        </div>
        <div className='icon-arrow'>
          <img className='arrow-icon' src="images/down-arrow.png"></img>
        </div>
        <div className='dashboard'>
          <a class='dashboard-right-link' href='https://www.facebook.com/'>Dashboard</a>
        </div>
        <div className='icon'>
          <img className='menu-icon' src="images/headerMenu.png"></img>
        </div>
      </div>
    </header>
  )
}

export default Header;