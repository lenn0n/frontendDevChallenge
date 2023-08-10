import React from "react";

import ICCover from "@assets/images/ic-cover.png";
import ICAvatar from "@assets/images/ic-avatar.png";
const InteriorConsultant = () => {
  return <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="interior-consultant-container">
          <div className="d-flex justify-content-between">
            <div className="ic-header-logo">THIS INTERIOR</div>
            <div className="ic-header-menu gap-5">
              <div className="ic-header-menu-selected">Home</div>
              <div>Collection</div>
              <div>About</div>
              <div>Contact</div>
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
                <div className="mt-5 fw-bold ic-header-text mb-4">
                  Read more
                </div>
              </div>
            </div>

            <div className="col-lg-6   col-sm-12 d-flex align-items-center justify-content-between ">
              <img src={ICCover} alt="Loading" height="555px"/>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default InteriorConsultant;