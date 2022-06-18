/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './styles.css';

const Project = () => {
  return (
    <project>
      <div className='contextual'>
        <h2 className='project-text'>
          Projects
        </h2>
        <div className='add-project'>
          <div className='icon-add'>
            <img className='add-project-icon' src="images/icon-plus2.png"></img>
          </div>
          <div className='new-project'>
            <span className='new-pj-text'>New project</span>
          </div>
        </div>
      </div>
      <div className='space'>
      </div>
      <div id='project-index'>
        <ul className='projects-root'>
          <li className='root'>
            <div className='project-detail'>
              <div className='root-title'>
                <a className='project-link' href='#'>
                  CRX Project X
                </a>
                <div className='icon-star'>
                  <img className='star-img' src="images/icon-star.svg"></img>
                </div>
              </div>
              <div className='description'>
                <p>
                  Project X là dự án do Kagi và Yoshida thực thi
                </p>
              </div>
            </div>
          </li>
          <li className='root'>
            <div className='project-detail'>
              <div className='root-title'>
                <a className='project-link' href='#'>
                  CRX Yoseka AR
                </a>
                <div className='icon-star'>
                  <img className='star-img' src="images/icon-star.svg"></img>
                </div>
              </div>
              <div className='description'>
                <p>
                  Dự án: Digital Yosegaki AR | デジタル寄せ書きAR
                  Gửi bưu thiếp, stamp, video, thiệp mừng 3D kết hợp đời thực AR.
                  Backend: API Quản lý lưu thông tin user.
                  Frontend: Unity, Web hiển thị nội dung AR
                </p>
              </div>
            </div>
          </li>
          <li className='root'>
            <div className='project-detail'>
              <div className='root-title'>
                <a className='project-link' href='#'>
                  Other IEI
                </a>
                <div className='icon-star'>
                  <img className='star-img' src="images/icon-star.svg"></img>
                </div>
              </div>
              <div className='description'>
                <p>
                  Dự án trang CMS quản lý ảnh của công ty Fuji<br />
                  1. Quản lý ảnh<br />
                  2. Bảo mật dữ liệu cá nhân, xử lý XSS, hash<br />
                  3. Xử lý hiển thị thư mục như drive<br />
                </p>
              </div>
            </div>
          </li>
          <li className='root'>
            <div className='project-detail'>
              <div className='root-title'>
                <a className='project-link' href='#'>
                  CRXL Hiring
                </a>
                <div className='icon-star'>
                  <img className='star-img' src="images/icon-star.svg"></img>
                </div>
              </div>
              <div className='description'>
                <p>
                  Dự án hỗ trợ tuyển dụng với mục tiêu xây dựng hệ thống quản lý tuyển dụng cho Caeruxlab.
                </p>
              </div>
            </div>
          </li>
          <li className='root'>
            <div className='project-detail'>
              <div className='root-title'>
                <a className='project-link' href='#'>
                  Other IEI
                </a>
                <div className='icon-star'>
                  <img className='star-img' src="images/icon-star.svg"></img>
                </div>
              </div>
              <div className='description'>
                <p>
                  Dự án trang CMS quản lý ảnh của công ty Fuji<br />
                  1. Quản lý ảnh<br />
                  2. Bảo mật dữ liệu cá nhân, xử lý XSS, hash<br />
                  3. Xử lý hiển thị thư mục như drive<br />
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </project>
  )
}

export default Project;
