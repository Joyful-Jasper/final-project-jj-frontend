import React from "react";
import desain from "../../../assets/desain.svg";

const Transactions = () => {
	return (
		// <div className="countainer">
		// 	<div className="container-fluid" style={{ backgroundColor: "#ECECEC" }}>
		// 		<div className="row justify-content-center d-flex mx-auto">
		// 			<div className="col-5 my-5 py-3" style={{ backgroundColor: "#30475E" }}>
		// 				<label htmlFor="exampleFormControlInput1" className="form-label" style={{ color: "white" }}>
		// 					First Name
		// 				</label>
		// 				<input type="text" className="form-control" id="firstNameView" name="email" />
		// 				<label htmlFor="exampleFormControlInput1" className="form-label" style={{ color: "white" }}>
		// 					Last Name
		// 				</label>
		// 				<input type="text" className="form-control" id="LastNameView" name="email" />
		// 				<label htmlFor="exampleFormControlInput1" className="form-label" style={{ color: "white" }}>
		// 					Email
		// 				</label>
		// 				<input type="email" className="form-control" id="emailView" name="email" placeholder="name@example.com" />
		// 				<label htmlFor="exampleFormControlInput1" className="form-label" style={{ color: "white" }}>
		// 					Confirmasi Email
		// 				</label>
		// 				<input type="email" className="form-control" id="emailView" name="email" placeholder="name@example.com" />
		// 			</div>
		// 			<div className="col-5 ms-5 my-5">
		// 				<div style={{ backgroundColor: "#30475E", color: "white" }} className="py-3 ps-3">
		// 					<div className="form-check">
		// 						<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
		// 						<label className="form-check-label" htmlFor="flexRadioDefault1">
		// 							Paypal
		// 						</label>
		// 					</div>
		// 					<div className="form-check">
		// 						<input
		// 							className="form-check-input"
		// 							type="radio"
		// 							name="flexRadioDefault"
		// 							id="flexRadioDefault2"
		// 							checked
		// 						/>
		// 						<label className="form-check-label" htmlFor="flexRadioDefault2">
		// 							GoPay
		// 						</label>
		// 					</div>
		// 					<div className="form-check">
		// 						<input
		// 							className="form-check-input"
		// 							type="radio"
		// 							name="flexRadioDefault"
		// 							id="flexRadioDefault2"
		// 							checked
		// 						/>
		// 						<label className="form-check-label" htmlFor="flexRadioDefault2">
		// 							ShopeePay
		// 						</label>
		// 					</div>
		// 					<div className="form-check">
		// 						<input
		// 							className="form-check-input"
		// 							type="radio"
		// 							name="flexRadioDefault"
		// 							id="flexRadioDefault2"
		// 							checked
		// 						/>
		// 						<label className="form-check-label" htmlFor="flexRadioDefault2">
		// 							virtual Bank
		// 						</label>
		// 					</div>
		// 					<div className="form-check">
		// 						<input
		// 							className="form-check-input"
		// 							type="radio"
		// 							name="flexRadioDefault"
		// 							id="flexRadioDefault2"
		// 							checked
		// 						/>
		// 						<label className="form-check-label" htmlFor="flexRadioDefault2">
		// 							Card
		// 						</label>
		// 					</div>
		// 				</div>
		// 				<div className="row my-5 py-3" style={{ backgroundColor: "#30475E", color: "white" }}>
		// 					<p> order summary </p>
		// 					<div className="col">
		// 						<img src={desain} height={40} white={30} />
		// 					</div>
		// 					<div className="col">
		// 						<p>Nama Product</p>
		// 					</div>
		// 					<div className="col">
		// 						<p> Total Harga </p>
		// 						<button className="justify-content-end d-flex mx-auto" style={{ border: "none" }}>
		// 							Bayar
		// 						</button>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<div className="container mt-5 mb-5">
			<div className="row gap-5 gap-md-0">
				<div className="col-md-6">
					<div className="card">
						<img src={desain} className="card-img-top" alt="..." />
						<div className="card-body text-center">
							<p className="card-text">Product Detail</p>
							<p>Rp.2.000.000,00</p>
							<p>$$$</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<p className="fw-bold">Quantity: </p>
								<p className="fw-bold">Desc: </p>
								<p>idajijdsaojdsaoasjoidajsojdsafuhufahiuhdaiufshiuahuhapfaohudahiahfdihaehfieuhwaiuhfiheiuwahih</p>
							</li>
							<li className="list-group-item">
								<div className="mb-3">
									<label htmlFor="exampleFormControlInput1" className="form-label">
										First Name
									</label>
									<input type="email" className="form-control" id="exampleFormControlInput1" />
								</div>
								<div className="mb-3">
									<label htmlFor="exampleFormControlInput1" className="form-label">
										Last Name
									</label>
									<input type="email" className="form-control" id="exampleFormControlInput1" />
								</div>
								<div className="mb-3">
									<label htmlFor="exampleFormControlInput1" className="form-label">
										Email
									</label>
									<input
										type="email"
										className="form-control"
										id="exampleFormControlInput1"
										placeholder="name@example.com"
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="exampleFormControlInput1" className="form-label">
										Confirm Email
									</label>
									<input
										type="email"
										className="form-control"
										id="exampleFormControlInput1"
										placeholder="name@example.com"
									/>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-md-6">
					<div className="row gap-5">
						<div className="col-12">
							<div className="card">
								<div className="card-header">Payments Options</div>
								<div className="card-body">
									<div className="form-check">
										<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
										<label className="form-check-label" htmlFor="flexRadioDefault1">
											Paypal
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
										<label className="form-check-label" htmlFor="flexRadioDefault2">
											Shopee Pay
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
										<label className="form-check-label" htmlFor="flexRadioDefault3">
											Gopay
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
										<label className="form-check-label" htmlFor="flexRadioDefault4">
											Virtual Bank
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
										<label className="form-check-label" htmlFor="flexRadioDefault5">
											Card
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="card">
								<div className="card-header">Order Summary</div>
								<div className="card-body">
									<img src={desain} className="img-fluid" style={{ maxWidth: "100px" }} alt="..." />
									<p>Product Name</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Transactions;
