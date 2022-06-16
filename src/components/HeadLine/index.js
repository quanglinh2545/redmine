/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './styles.css';

const HeadLine = () => {
  return (
    <headline>
      <div className='dashboard-content'>
        <div className='dashboard-content-left'>
          <div className='project-list'>
            <div className='project-list-title'>
              <div className='project-list-left'>
                <div>
                  <img className='list-project-icon' src="images/icon-arrow-down.png"></img>
                </div>
                <span className='projects'>
                  Projects
                </span>
              </div>
              <div className='project-list-right'>
                <div className='icon-collapsed'>
                  <img className='list-project-icon2' src="images/icon-plus1.png"></img>
                </div>
                <div className='icon-collapsed'>
                  <img className='list-project-icon2' src="images/icon-search.svg"></img>
                </div>
              </div>
            </div>
            <div className='project-list-content'>
              <div className='project-list-link'>
                <div className='project-content'>
                  <div className='project-image'>
                    <img className='project-img' src="images/dashBoard.png"></img>
                  </div>
                  <div className='project-name'>
                    <span className='name'>
                      Project1
                    </span>
                    <div className='project-key'>
                      pj1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='dashboard-content-right'>
          222
        </div>
      </div>
    </headline>
  )
}

export default HeadLine;
