import React from "react";
import CheeseCake from "@assets/images/cheesecake.png"

const Recipe = () => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div>
          <div>
            <div className="rp-header-title">Classic Cheesecake Recipe</div>
            <div className="rp-header-desc d-flex gap-1">
            <span className="rp-header-desc-prefix">:::</span>
            Look no further for a creamy and ultra smooth classic cheesecake recipe! 
            Paired with a buttery graham cracker crust, no one can deny its simple decadence. 
            For the best results, bake in a water bath.
            </div>
          </div>
          <div className="rp-header-cover-container">
            <img src={CheeseCake} alt="CheeseCake" className="rp-header-cover"/>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Recipe;