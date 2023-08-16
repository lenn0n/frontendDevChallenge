import React from "react";
import ProfilePicture from "@assets/images/profilePhoto.png"

const Gallery = () => {
  return (<>
   <div className="d-flex align-items-center justify-content-center">
    <div className="d-flex flex-column align-items-center">
      <img src={ProfilePicture} alt="pf" height="156px" width="156px" className="mg-profile-photo"/>
      <div className="mg-name">Rodney Cotton</div>
      <div className="mg-location">Helsinki, Finland</div>
      <div className="d-flex gap-3 flex-wrap align-items-center justify-content-center">
        <div className="mg-stat">
          <div className="mg-stat-title">100</div>
          <div className="mg-stat-desc">Posts</div>
        </div>
        <div className="mg-stat">
          <div className="mg-stat-title">2,242</div>
          <div className="mg-stat-desc">Follower</div>
        </div>
        <div className="mg-stat">
          <div className="mg-stat-title">1,432</div>
          <div className="mg-stat-desc">Following</div>
        </div>
      </div>
    </div>
   </div>
  </>)
}

export default Gallery