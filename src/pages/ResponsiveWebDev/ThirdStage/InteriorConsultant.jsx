import React, { useState } from "react";

import ICCover from "@assets/images/ic-cover.png";
import ICAvatar from "@assets/images/ic-avatar.png";
import Burger from "@assets/images/burger.png";

const InteriorConsultant = () => {
  const [ openNav, setOpenNav ] = useState(false)
  return <>
      <div className={`offcanvas2 ${openNav? '--show' : ''}`} >
        <div className="close-nav mt-4">
          <span class="material-icons text-white" onClick={()=> {setOpenNav(!openNav)}} role="button">ic_close</span>
        </div>

        <div className="d-flex flex-column gap-4 h-100 justify-content-center align-items-center text-white">
              <div className="ic-header-item ic-header-menu-selected" role="button">Home</div>
              <div className="ic-header-item" role="button">Collection</div>
              <div className="ic-header-item" role="button">About</div>
              <div className="ic-header-item" role="button">Contact</div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center" >
        <div className="interior-consultant-container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="ic-header-logo">THIS INTERIOR</div>
            </div>
            <div className="ic-header-menu gap-5">
              <div className="ic-header-item ic-header-menu-selected" role="button">Home</div>
              <div className="ic-header-item" role="button">Collection</div>
              <div className="ic-header-item" role="button">About</div>
              <div className="ic-header-item" role="button">Contact</div>
            </div>
            <div className="hamburger" role="button" onClick={()=> {setOpenNav(!openNav)}}>
              <img src={Burger} width={50} height={50} alt=""/>
            </div>
          </div>

          <div className="mt-5 row align-items-center justify-content-center">
            <div className="col-lg-6 col-sm-12">
              <div className="col-9">
                <div className="ic-body-title">
                  Modern interior
                </div>
                <div className="ic-body-desc">
                  A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.
                </div>
                <div className="mt-5 fw-bold ic-header-text mb-4 d-flex gap-2" role="button">
                  Read more <span class="material-icons">arrow_right_alt</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6  col-sm-12 ">
              <img src={ICCover} alt="Loading" className="ic-cover"/>
              <div className="d-flex justify-content-end">
                <div className="ic-author-container">
                  <div className="d-flex align-items-center m-4">
                    <img src={ICAvatar} className="ic-avatar" alt="author" height={50} width={50}/>
                    <div className="ms-3">
                      <div className="ic-author">Aliza Webber</div>
                      <div className="ic-position">Interior designer</div>
                    </div>
                  </div>
                  <div className="ic-banner ps-4 pe-4 pt-1" style={{width: '287px'}}>
                  Designed in 2020 by Aliza Webber
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default InteriorConsultant;