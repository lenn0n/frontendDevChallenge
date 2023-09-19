import React from "react";
import Footer from "@components/Footer/Footer";
import CheeseCake from "@assets/images/cheesecake.png";

const Recipe = () => {
	return (
		<>
			<div className="container flex mx-auto justify-center rp-container p-5">
				<div style={{ width: "1000px" }}>
					<div>
						<div className="rp-header-title">
							Classic Cheesecake Recipe
						</div>
						<div className="rp-header-desc flex gap-1">
							<span className="rp-header-desc-prefix">:::</span>
							Look no further for a creamy and ultra smooth classic
							cheesecake recipe! Paired with a buttery graham cracker
							crust, no one can deny its simple decadence. For the
							best results, bake in a water bath.
						</div>
					</div>
					<div className="rp-header-cover-container">
						<img
							src={CheeseCake}
							alt="CheeseCake"
							className="rp-header-cover"
						/>
					</div>
					<div className="flex justify-between items-container">
						<div className="ing-items">
							<div className="rp-ingredient-title">Ingredients</div>
							<div className="rp-ingredient-item">
								Graham Cracker Crust
							</div>
							<div class="form-check">
								<input
									class="form-check-input peer/step1"
									type="checkbox"
									value=""
									id="1"
								/>
								<label
									class="form-check-label rp-ingredient-sub-item peer-checked/step1:text-green-600"
									for="1"
								>
									1 and 1/2 cups (150g){" "}
									<strong>graham cracker crumbs</strong> (about 10
									full sheet graham crackers)
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input peer/step2"
									type="checkbox"
									value=""
									id="2"
								/>
								<label
									class="form-check-label rp-ingredient-sub-item peer-checked/step2:text-green-600"
									for="2"
								>
									5 Tablespoons (70g) <strong>unsalted butter</strong>
									, melted
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input peer/step3"
									type="checkbox"
									value=""
									id="3"
								/>
								<label
									class="form-check-label rp-ingredient-sub-item peer-checked/step3:text-green-600"
									for="3"
								>
									1/4 cup (50g) <strong>granulated sugar</strong>
								</label>
							</div>

							<div className="rp-ingredient-item">Cheesecake</div>
							<div class="form-check">
								<input
									class="form-check-input peer/step4"
									type="checkbox"
									value=""
									id="4"
								/>
								<label
									class="form-check-label rp-ingredient-sub-item peer-checked/step4:text-green-600"
									for="4"
								>
									four 8-ounce blocks (904g) full-fat{" "}
									<strong>cream cheese</strong>, softened to room
									temperature
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input peer/step5"
									type="checkbox"
									value=""
									id="5"
								/>
								<label
									class="form-check-label rp-ingredient-sub-item peer-checked/step5:text-green-600"
									for="5"
								>
									1 cup (200g) <strong>granulated sugar</strong>
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input peer/step6"
									type="checkbox"
									value=""
									id="6"
								/>
								<label
									class="form-check-label rp-ingredient-sub-item peer-checked/step6:text-green-600"
									for="6"
								>
									1 cup (240g) full-fat <strong>sour cream</strong>,
									at room temperature
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input peer/step7"
									type="checkbox"
									value=""
									id="7"
								/>
								<label
									class="form-check-label rp-ingredient-sub-item peer-checked/step7:text-green-600"
									for="7"
								>
									1 teaspoon <strong>pure vanilla extract</strong>
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input peer/step8"
									type="checkbox"
									value=""
									id="8"
								/>
								<label
									class="form-check-label rp-ingredient-sub-item peer-checked/step8:text-green-600"
									for="8"
								>
									2 teaspoons <strong>fresh lemon juice</strong>{" "}
									(optional, but recommended)
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input peer/step9"
									type="checkbox"
									value=""
									id="9"
								/>
								<label
									class="form-check-label rp-ingredient-sub-item peer-checked/step9:text-green-600"
									for="9"
								>
									3 large <strong>eggs</strong>, at room temperature
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input peer/step10"
									type="checkbox"
									value=""
									id="10"
								/>
								<label
									class="form-check-label rp-ingredient-sub-item peer-checked/step10:text-green-600"
									for="10"
								>
									topping suggestions:{" "}
									<i>
										salted caramel, lemon curd, strawberry topping,
										chocolate ganache, red wine chocolate ganache,
										fresh fruit, whipped cream, or raspberry sauce
									</i>{" "}
									(recipe in notes)
								</label>
							</div>
						</div>
						<div className="rp-summary">
							<div className="flex items-center gap-2 ">
								<span class="material-icons rp-summary-selected">
									restaurant_menu
								</span>
								<div>
									<div className="rp-summary-item-title">YIELDS</div>
									<div className="rp-summary-item-value rp-summary-selected">
										12 servings
									</div>
								</div>
							</div>
							<div className="flex items-center gap-2 ">
								<span class="material-icons">schedule</span>
								<div>
									<div className="rp-summary-item-title">
										PREP TIME
									</div>
									<div className="rp-summary-item-value">
										45 minutes
									</div>
								</div>
							</div>
							<div className="flex items-center gap-2 ">
								<span class="material-icons">schedule</span>
								<div>
									<div className="rp-summary-item-title">
										COOK TIME
									</div>
									<div className="rp-summary-item-value">1 hour</div>
								</div>
							</div>
							<div className="flex items-center gap-2 ">
								<span class="material-icons">schedule</span>
								<div>
									<div className="rp-summary-item-title">
										TOTAL TIME
									</div>
									<div className="rp-summary-item-value">
										7,75 hours
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="rp-ingredient-title mt-4">Instructions</div>

					<div className="flex">
						<div className="rp-step-wrapper">1</div>
						<div>
							Adjust the oven rack to the lower-middle position and
							preheat oven to 350°F (177°C).
						</div>
					</div>
					<div className="flex mt-3">
						<div className="rp-step-wrapper">2</div>
						<div>
							<b>Make the crust:</b> Using a food processor, pulse the
							graham crackers into crumbs. Pour into a medium bowl and
							stir in sugar and melted butter until combined. (You can
							also pulse it all together in the food processor.)
							Mixture will be sandy. Press firmly into the bottom and
							slightly up the sides of a 9-inch or 10-inch springform
							pan. No need to grease the pan first. I use the bottom
							of a measuring cup to pack the crust down tightly.
							Pre-bake for 8 minutes. Remove from the oven and place
							the hot pan on a large piece of aluminum foil. The foil
							will wrap around the pan for the water bath in step 4.
							Allow crust to slightly cool as you prepare the filling.
						</div>
					</div>
					<div className="flex mt-3">
						<div className="rp-step-wrapper">3</div>
						<div>
							<b>Make the filling:</b> Using a handheld or stand mixer
							fitted with a paddle attachment, beat the cream cheese
							and granulated sugar together on medium-high speed in a
							large bowl until the mixture is smooth and creamy, about
							2 minutes. Add the sour cream, vanilla extract, and
							lemon juice then beat until fully combined. On medium
							speed, add the eggs one at a time, beating after each
							addition until just blended. After the final egg is
							incorporated into the batter, stop mixing. To help
							prevent the cheesecake from deflating and cracking as it
							cools, avoid over-mixing the batter as best you can..
						</div>
					</div>
					<div className="flex mt-3">
						<div className="rp-step-wrapper">4</div>
						<div>
							<b>Prepare the simple water bath (see note)</b> Boil a
							pot of water. You need 1 inch of water in your roasting
							pan for the water bath, so make sure you boil enough. I
							use an entire kettle of hot water. As the water is
							heating up, wrap the aluminum foil around the springform
							pan. Pour the cheesecake batter on top of the crust. Use
							a rubber spatula or spoon to smooth it into an even
							layer. Place the pan inside of a large roasting pan.
							Carefully pour the hot water inside of the pan and place
							in the oven. (Or you can place the roasting pan in the
							oven first, then pour the hot water in. Whichever is
							easier for you.)
						</div>
					</div>
					<div className="flex mt-3">
						<div className="rp-step-wrapper">5</div>
						<div>
							Bake cheesecake for 55-70 minutes or until the center is
							almost set. When it’s done, the center of the cheesecake
							will slightly wobble if you gently shake the pan. Turn
							the oven off and open the oven door slightly. Let the
							cheesecake sit in the oven in the water bath as it cools
							down for 1 hour. Remove from the oven and water bath,
							then cool cheesecake completely at room temperature.
							Then refrigerate the cheesecake for at least 4 hours or
							overnight.
						</div>
					</div>
					<div className="flex mt-3">
						<div className="rp-step-wrapper">6</div>
						<div>
							Use a knife to loosen the chilled cheesecake from the
							rim of the springform pan, then remove the rim. Using a
							clean sharp knife, cut into slices for serving. For neat
							slices, wipe the knife clean and dip into warm water
							between each slice.
						</div>
					</div>
					<div className="flex mt-3">
						<div className="rp-step-wrapper">7</div>
						<div>
							Serve cheesecake with desired toppings. Cover and store
							leftover cheesecake in the refrigerator for up to 5
							days.
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Recipe;
