import React, { useState, useCallback } from "react";
import Item1 from "@assets/images/cp-p1.png";
import Item2 from "@assets/images/cp-p2.png";
import Footer from "@components/Footer/Footer";
const Checkout = () => {
	const [ cart, setCart ] = useState([
		{
			imgUrl: Item1,
			title: "Vintage Backbag",
			price: "54.99",
			discount: "94.99",
			itemCode: "CI-001",
		},
		{
			imgUrl: Item2,
			title: "Levi Shoes",
			price: "74.99",
			discount: "124.99",
			itemCode: "CI-002",
		}
	])

	const [ quantity, setQuantity ] = useState([
		{
			itemCode: "CI-001",
			quantity: 1
		},
		{
			itemCode: "CI-002",
			quantity: 1
		}
	])

	const [errors, setErrors] = useState([])
	const [data, setData] = useState({})

	const setFormData = (key, value) => {
		setData((data) => { return {...data, [key]: value}})
	}
	
	const onSubmitHandler = () => {
		setErrors([])
		let tempErrors = []
		const listOfData = ["email", "phone", "name", "address", "city", "country", "postal"];
		listOfData.map((x)=> {
			if(!data[x]){
				tempErrors.push({ id: x})
			}
		})

		setErrors(tempErrors)
	}

	const getError = (id) => {
		let hasError = false;

		if (errors?.length > 0){
			errors.map((data) => {
				if (data.id == id){
					hasError = true
				}
			})
		}

		return hasError
	}

	const InputForm = useCallback(({
		id = "",
		title = "",
		icon = "help",
		placeholder = "...",
		error=""
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
						value={data?.[id]}
						onChange={(e)=>{ setFormData(id, e.target.value)}}

					/>
					<div className="material-icons input-field-icon peer-focus/input:rotate-45 transition ">
						{icon}
					</div>
					<div className="text-custom-primary font-medium hidden peer-focus/input:block peer-focus/input:transition before:content-['*'] before:text-red-500 before:mr-1">
						Enter valid {title}
					</div>
					{	error &&
						<div className="text-red-700 font-medium">
							Please provide {title}
						</div>
					}
				</div>
			</div>
		);
	},[]);

	const OrderItem = useCallback(({ imgUrl, title, price, discount, itemCode }) => {
		return (
			<div className="flex gap-2 flex-col sm:flex-row gap-5 m-4">
				<img
					className="rounded-lg object-contain"
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
								${price}
							</div>
							<div className="line-through font-semibold size-[16px] text-[#4E5150]">
								${discount}
							</div>
						</div>
					</div>
					<div className=" flex flex-wrap items-center justify-between flex-row border rounded-lg p-3 gap-2 border-[#858585]">
							<span className="bg-secondary w-[24px] h-[24px] rounded-md flex justify-center items-center hover:scale-110" role="button"
								onClick={()=>{ decrementQty(itemCode)}}>
								<svg width="13" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<line y1="1" x2="16" y2="1" stroke="#828282" stroke-width="2" class="icon" />
								</svg>
							</span>
							<input name={itemCode} className="border-none w-7 text-center bg-[#f2f2f2]" onChange={changeQuantity} value={getQuantity(itemCode)}/>
							<span className="bg-secondary w-[24px] h-[24px] rounded-md flex justify-center items-center hover:scale-110" role="button"
								onClick={()=>{ incrementQty(itemCode)}}>
								<svg width="13" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
									<line x1="8" y1="4.37114e-08" x2="8" y2="16" stroke="#828282" stroke-width="2" />
									<line y1="8" x2="16" y2="8" stroke="#828282" stroke-width="2" />
								</svg>
							</span>
					</div>
				</div>
			</div>
		);
	}, []);

	const SelectForm = useCallback(({
		title = "",
		icon = "help",
		placeholder = "...",
		error, 
		id = ""
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
						onChange={(e)=>{ setFormData(id, e.target.value)}}
					>
						<option value="" disabled selected>
							Your country..
						</option>
						<option value="ph">Philippines</option>
						<option value="us">United States</option>
						<option value="ph">Japan</option>
					</select>
					<span className="material-icons input-field-icon peer-focus/select:rotate-45">
						{icon}
					</span>
					<span className="material-icons input-field-bgicon rounded-md">
						expand_more
					</span>
					{	error &&
						<div className="text-red-700 font-medium">
							Please provide {title}
						</div>
					}
				</div>
			</div>
		);
	}, []);


	const getQuantity = (itemCode) => {
		let qty = 0
		if (quantity?.length > 0){
			quantity.map((data) => {
				if (data.itemCode == itemCode){
					qty =  String(data.quantity)
				}
			})
		}

		return qty
	}

	const incrementQty = (itemCode, increment = 1) => {
		let newQuantities = [];
		
		if (quantity?.length > 0){
			quantity.map((data) => {
				if (data.itemCode == itemCode){
					const qty = data.quantity += increment;
					newQuantities.push({
						...data,
						quantity: qty
					})
				} else {
					newQuantities.push(data)
				}
			})
		}

		setQuantity(newQuantities)
	}

	const decrementQty = (itemCode, increment = 1) => {
		let newQuantities = [];
		
		if (quantity?.length > 0){
			quantity.map((data) => {
				if (data.itemCode == itemCode && data.quantity > 1){
					const qty = data.quantity -= increment;
					newQuantities.push({
						...data,
						quantity: qty
					})
				} else {
					newQuantities.push(data)
				}
			})
		}

		setQuantity(newQuantities)
	}

	const changeQuantity = (e) => {
		let newQuantities = [], code = e.target.name, value = e.target.value;

		quantity.map((data) => {
			if (data.itemCode == code){
				newQuantities.push({
					...data,
					quantity: value
				})
			} else {
				newQuantities.push(data)
			}
		})

		setQuantity(newQuantities)
	}
	
	const getTotalAmount = () => {
		let tempTotal = 0;

		if (cart?.length > 0){
			cart.map((data) => {
				tempTotal += getQuantity(data.itemCode) * data.price
			})
		}

		return tempTotal
	}

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
								id="email"
								title="Email"
								icon="mail"
								placeholder="Enter your email..."
								error={getError('email')}
							/>
							<InputForm
								id="phone"
								title="Phone"
								icon="phone"
								placeholder="Enter your phone..."
								error={getError('phone')}
							/>
							<div className="checkout-title mt-5">
								Shipping information
							</div>
							<InputForm
								id="name"
								title="Full name"
								icon="account_circle"
								placeholder="Your name.."
								error={getError('name')}
							/>
							<InputForm
								id="address"
								title="Address"
								icon="home"
								placeholder="Your address.."
								error={getError('address')}
							/>
							<InputForm
								id="city"
								title="City"
								icon="location_city"
								placeholder="Your city.."
								error={getError('city')}
							/>
							<div className="md:flex justify-between gap-3">
								<SelectForm
									id="country"
									title="Country"
									icon="public"
									placeholder="Your country.."
									error={getError('country')}
								/>
								<InputForm
									id="postal"
									title="Postal code"
									icon="markunread_mailbox"
									placeholder="Your postal code.."
									error={getError('postal')}
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
								<button className="checkout-button text-white mt-4 hover:shadow-xl hover:shadow-orange-500/50 hover:transition-all duration-700" onClick={onSubmitHandler}>
									Continue
								</button>
							</div>
						</div>
					</div>
					<div className="order-1 md:order-2 lg:w-5/6">
						<div className="checkout-panel-card rounded-xl m-3 p-4">
							{ cart?.length > 0 && 
								cart.map(data => {
									return (
										<OrderItem 
											{...data}
										/>
									)
								})
							}
							<div className="mt-5 border-t border-[#BDBDBD] checkout-label flex justify-between">
								<div className="pt-2 text-[18px!important]">Shipping</div>
								<div className="pt-2 text-[18px!important]">$19</div>
							</div>
							<div className="mt-2 border-t border-[#BDBDBD] checkout-label flex justify-between">
								<div className="pt-2 text-[18px!important]">Total</div>
								<div className="pt-2 text-[18px!important]">${getTotalAmount()}</div>
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
