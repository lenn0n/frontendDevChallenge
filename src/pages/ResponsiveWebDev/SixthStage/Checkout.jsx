import React from "react";
import Item1 from "@assets/images/cp-p1.png";
import Item2 from "@assets/images/cp-p2.png";
const Checkout = () => {
	const InputForm = ({
		title = "",
		icon = "help",
		placeholder = "...",
	}) => {
		return (
			<div className="checkout-form w-full group">
				<div className="checkout-label">{title}</div>
				<div className="flex flex-column">
					<input
						type="text"
						className="checkout-input rounded-lg w-full focus:border-gray-500 outline-none border-2 focus:bg-gray-100 peer/input"
						placeholder={placeholder}
						autoComplete="off"
					/>
					<span className="material-icons input-field-icon peer-focus/input:rotate-45 transition ">
						{icon}
					</span>
					<div className="text-custom-primary font-medium hidden peer-focus/input:block peer-focus/input:transition before:content-['*'] before:text-red-500 before:mr-1">
						Enter valid {title}
					</div>
				</div>
			</div>
		);
	};

	const SelectForm = ({
		title = "",
		icon = "help",
		placeholder = "...",
	}) => {
		return (
			<div className="checkout-form w-full">
				<div className="checkout-label">{title}</div>
				<div className="flex flex-column">
					<select
						className="checkout-select rounded-lg w-full focus:border-gray-500 outline-none border-2 focus:bg-gray-100 peer/select"
						defaultValue=""
						placeholder="Select your country"
						name="xx"
					>
						<option value="" disabled selected>
							Your country..
						</option>
						<option value="ph">Philippines</option>
						<option value="us">United States</option>
					</select>
					<span className="material-icons input-field-icon peer-focus/select:rotate-45 transition  animate-spin">
						{icon}
					</span>
					<span className="material-icons input-field-bgicon  rounded-md">
						expand_more
					</span>
				</div>
			</div>
		);
	};
	return (
		<div className="container-sm">
			<div className="flex flex-wrap justify-between">
				<div className="checkout-header">Checkout</div>
				<div></div>
			</div>
			<div className="grid md:grid-cols-2 gap-4">
				<div className="md:w-3/4">
					<div className="checkout-title">Contact information</div>
					<InputForm
						title="Email"
						icon="mail"
						placeholder="Enter your email..."
					/>
					<InputForm
						title="Phone"
						icon="phone"
						placeholder="Enter your phone..."
					/>
					<div className="checkout-title mt-5">
						Shipping information
					</div>
					<InputForm
						title="Full name"
						icon="account_circle"
						placeholder="Your name.."
					/>
					<InputForm
						title="Address"
						icon="home"
						placeholder="Your address.."
					/>
					<InputForm
						title="City"
						icon="location_city"
						placeholder="Your city.."
					/>
					<div className="md:flex justify-between gap-3">
						<SelectForm
							title="Country"
							icon="public"
							placeholder="Your country.."
						/>
						<InputForm
							title="Postal code"
							icon="markunread_mailbox"
							placeholder="Your postal code.."
						/>
					</div>
					<div className="flex gap-2">
						<input type="checkbox" name="save" />
						<label for="save" className="fw-bold checkout-label ">
							Save this information for next time
						</label>
					</div>
					<div className="grid place-items-end">
						<button className="checkout-button text-white mt-4">
							Continue
						</button>
					</div>
				</div>

				<div className="basis-full">
					<div className="checkout-panel-card rounded-3 p-4">
						<div className="flex gap-2">
							<img
								className="rounded-3"
								src={Item1}
								height={134}
								width={134}
							/>
							<div className="text-[16px] font-[600]">
								Vintage Backbag
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
