import React from "react";
import Item1 from "@assets/images/cp-p1.png";
import Item2 from "@assets/images/cp-p2.png";
import Footer from "@components/Footer/Footer";
const Checkout = () => {
	const InputForm = ({
		title = "",
		icon = "help",
		placeholder = "...",
	}) => {
		return (
			<div className="checkout-form w-full">
				<div className="checkout-label">{title}</div>
				<div className="flex flex-col">
					<input
						type="text"
						className="checkout-input block rounded-lg w-full focus:border-gray-500 outline-none border-2 focus:bg-gray-100 peer/input"
						placeholder={placeholder}
						autocomplete="off"
					/>
					<div className="material-icons input-field-icon peer-focus/input:rotate-45 transition ">
						{icon}
					</div>
					<div className="text-custom-primary font-medium hidden peer-focus/input:block peer-focus/input:transition before:content-['*'] before:text-red-500 before:mr-1">
						Enter valid {title}
					</div>
				</div>
			</div>
		);
	};

	const OrderItem = ({ imgUrl, title, price, discount }) => {
		return (
			<div className="flex gap-2 flex-row gap-5 m-4">
				<img
					className="rounded-lg"
					src={imgUrl}
					height={134}
					width={134}
				/>
				<div className="flex flex-col justify-between">
					<div>
						<div className="text-[16px] font-[600] text-[#4E5150]">
							{title}
						</div>
						<div className="flex gap-2 flex-row flex-wrap">
							<div className="text-checkout-primary font-semibold size-[16px]">
								{price}
							</div>
							<div className="line-through font-semibold size-[16px] text-[#4E5150]">
								{discount}
							</div>
						</div>
					</div>
					<div className=" flex flex-wrap items-center justify-between flex-row border rounded-lg p-3 gap-2 border-[#858585]">
							<span className="bg-secondary w-[24px] h-[24px] rounded-md flex justify-center items-center" role="button">
								<svg width="13" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<line y1="1" x2="16" y2="1" stroke="#828282" stroke-width="2" class="icon" />
								</svg>
							</span>
							<span>1</span>
							<span className="bg-secondary w-[24px] h-[24px] rounded-md flex justify-center items-center" role="button">
								<svg width="13" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
									<line x1="8" y1="4.37114e-08" x2="8" y2="16" stroke="#828282" stroke-width="2" />
									<line y1="8" x2="16" y2="8" stroke="#828282" stroke-width="2" />
								</svg>
							</span>
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
				<div className="flex flex-col">
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
					<span className="material-icons input-field-icon peer-focus/select:rotate-45 transition animate-spin">
						{icon}
					</span>
					<span className="material-icons input-field-bgicon rounded-md">
						expand_more
					</span>
				</div>
			</div>
		);
	};
	return (
		<>
			<div className="container mx-auto flex flex-col w-100 md:w-[1000px]">
				<div className="place-items-start checkout-header ms-4 me-4">
					Checkout
				</div>
				<div className="grid md:grid-cols-2 gap-4">
					<div className="order-2 md:order-1">
						<div className="ms-4 me-4">
							<div className="checkout-title">
								Contact information
							</div>
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
								<input
									type="checkbox"
									id="save"
									className="w-5 h-5 bg-gray-900 accent-checkout-primary border-gray-900 rounded focus:ring-orange-500 focus:ring-2 "
								/>
								<label
									for="save"
									className="checkout-label text-[#4F4F4F]"
								>
									Save this information for next time
								</label>
							</div>
							<div className="grid place-items-end">
								<button className="checkout-button text-white mt-4">
									Continue
								</button>
							</div>
						</div>
					</div>
					<div className="order-1 md:order-2 lg:w-5/6">
						<div className="checkout-panel-card rounded-xl m-3 p-4">
							<OrderItem 
								imgUrl={Item1}
								title="Vintage Backbag"
								price="$54.99"
								discount="$94.99"
							/>
							<OrderItem 
								imgUrl={Item2}
								title="Levi Shoes"
								price="$74.99"
								discount="$124.99"
							/>
							<div className="mt-5 border-t border-[#BDBDBD] checkout-label flex justify-between">
								<div className="pt-2 text-[18px!important]">Shipping</div>
								<div className="pt-2 text-[18px!important]">$19</div>
							</div>
							<div className="mt-2 border-t border-[#BDBDBD] checkout-label flex justify-between">
								<div className="pt-2 text-[18px!important]">Total</div>
								<div className="pt-2 text-[18px!important]">$148.98</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Checkout;
