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
          <div className="d-flex">
            <div className="ing-items">
              <div className="rp-ingredient-title">
                Ingredients
              </div>
              <div className="rp-ingredient-item">
                Graham Cracker Crust
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="1"/>
                <label class="form-check-label rp-ingredient-sub-item" for="1">
                1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong> (about 10 full sheet graham crackers)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="2"/>
                <label class="form-check-label rp-ingredient-sub-item" for="2">
                5 Tablespoons (70g) <strong>unsalted butter</strong>, melted
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="3"/>
                <label class="form-check-label rp-ingredient-sub-item" for="3">
                1/4 cup (50g) <strong>granulated sugar</strong>
                </label>
              </div>
            </div>
            <div className="ing-summary">
              [ NEXT ITEMS ]
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Recipe;