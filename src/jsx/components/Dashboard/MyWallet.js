import React,{Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown, Modal } from "react-bootstrap";
import Donut2 from './../Mophy/MyWallet/Donut2';
import WalletTab from './../Mophy/MyWallet/WalletTab';

import avt1 from './../../../images/avatar/15.png';
import avt2 from './../../../images/avatar/16.png';
import avt3 from './../../../images/avatar/17.png';
import avt4 from './../../../images/avatar/18.png';
const contentBlog = [
	{images: avt1  , title: 'FSoziety', price: '$45', time: '4h ago',},
	{images: avt2  , title: 'David Ignis', price: '$672', time: '5h ago',},
	{images: avt3  , title: 'Olivis Johan', price: '$769', time: '7h ago',},
	{images: avt4  , title: 'Stevan Store', price: '$562', time: '5h ago',},
	{images: avt2 , title: 'Kidz Zoo', price: '$776', time: '3h ago',},
];

const MyWallet = () => {
	const [sendMessage, setSendMessage] = useState(false);
	return(
		<Fragment>
			<div className="form-head mb-4">
				<h2 className="text-black font-w600 mb-0">My Wallet</h2>
			</div>
			<div className="row">
				<div className="col-xl-9 col-xxl-12">
					<div className="row">
						<div className="col-xl-12">
							<div className="card stacked-2">
								<div className="card-header flex-wrap border-0 pb-0 align-items-end">
									<div className="d-flex align-items-center mb-3 me-3">
										<svg className="me-3" width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M59.4999 31.688V19.8333C59.4999 19.0818 59.2014 18.3612 58.6701 17.8298C58.1387 17.2985 57.418 17 56.6666 17H11.3333C10.5818 17 9.86114 16.7014 9.32978 16.1701C8.79843 15.6387 8.49992 14.9181 8.49992 14.1666C8.49992 13.4152 8.79843 12.6945 9.32978 12.1632C9.86114 11.6318 10.5818 11.3333 11.3333 11.3333H56.6666C57.418 11.3333 58.1387 11.0348 58.6701 10.5034C59.2014 9.97208 59.4999 9.25141 59.4999 8.49996C59.4999 7.74851 59.2014 7.02784 58.6701 6.49649C58.1387 5.96514 57.418 5.66663 56.6666 5.66663H11.3333C9.07891 5.66663 6.9169 6.56216 5.32284 8.15622C3.72878 9.75028 2.83325 11.9123 2.83325 14.1666V53.8333C2.83325 56.0876 3.72878 58.2496 5.32284 59.8437C6.9169 61.4378 9.07891 62.3333 11.3333 62.3333H56.6666C57.418 62.3333 58.1387 62.0348 58.6701 61.5034C59.2014 60.9721 59.4999 60.2514 59.4999 59.5V47.6453C61.1561 47.0683 62.5917 45.9902 63.6076 44.5605C64.6235 43.1308 65.1693 41.4205 65.1693 39.6666C65.1693 37.9128 64.6235 36.2024 63.6076 34.7727C62.5917 33.3431 61.1561 32.265 59.4999 31.688ZM53.8333 56.6666H11.3333C10.5818 56.6666 9.86114 56.3681 9.32978 55.8368C8.79843 55.3054 8.49992 54.5847 8.49992 53.8333V22.1453C9.40731 22.4809 10.3658 22.6572 11.3333 22.6666H53.8333V31.1666H45.3333C43.0789 31.1666 40.9169 32.0622 39.3228 33.6562C37.7288 35.2503 36.8333 37.4123 36.8333 39.6666C36.8333 41.921 37.7288 44.083 39.3228 45.677C40.9169 47.2711 43.0789 48.1666 45.3333 48.1666H53.8333V56.6666ZM56.6666 42.5H45.3333C44.5818 42.5 43.8611 42.2015 43.3298 41.6701C42.7984 41.1387 42.4999 40.4181 42.4999 39.6666C42.4999 38.9152 42.7984 38.1945 43.3298 37.6632C43.8611 37.1318 44.5818 36.8333 45.3333 36.8333H56.6666C57.418 36.8333 58.1387 37.1318 58.6701 37.6632C59.2014 38.1945 59.4999 38.9152 59.4999 39.6666C59.4999 40.4181 59.2014 41.1387 58.6701 41.6701C58.1387 42.2015 57.418 42.5 56.6666 42.5Z" fill="#1EAAE7"/>
										</svg>
										<div className="me-auto">
											<h5 className="fs-20 text-black font-w600">Main Balance</h5>
											<span className="text-num text-black font-w600">$673,412.66</span>
										</div>
									</div>
									<div className="me-3 mb-3">
										<p className="fs-14 mb-1">VALID THRU</p>
										<span className="text-black">08/21</span>
									</div>
									<div className="me-3 mb-3">
										<p className="fs-14 mb-1">CARD HOLDER</p>
										<span className="text-black">Yash Pradhan</span>
									</div>
									<span className="fs-20 text-black font-w500 me-3 mb-3">**** **** **** 1234</span>
									<Dropdown className="mb-auto">
										<Dropdown.Toggle variant="" as="div" className="btn-link i-false" >	
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M10 11.9999C10 13.1045 10.8954 13.9999 12 13.9999C13.1046 13.9999 14 13.1045 14 11.9999C14 10.8954 13.1046 9.99994 12 9.99994C10.8954 9.99994 10 10.8954 10 11.9999Z" fill="black"/>
												<path d="M10 4.00006C10 5.10463 10.8954 6.00006 12 6.00006C13.1046 6.00006 14 5.10463 14 4.00006C14 2.89549 13.1046 2.00006 12 2.00006C10.8954 2.00006 10 2.89549 10 4.00006Z" fill="black"/>
												<path d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20Z" fill="black"/>
											</svg>
										</Dropdown.Toggle>	
										<Dropdown.Menu alignRight={true} className="dropdown-menu-right">
											<Dropdown.Item >Delete </Dropdown.Item>
											<Dropdown.Item >Edit </Dropdown.Item>		
										</Dropdown.Menu>	
									</Dropdown>
								</div>
								<div className="card-body">
									<div className="progress mb-4" style={{height:"18px"}}>
										<div className="progress-bar bg-inverse progress-animated" style={{width: "40%", height:"18px" }} role="progressbar">
											<span className="sr-only">60% Complete</span>
										</div>
									</div>
									<div className="row align-items-center">
										<div className="col-xl-3 mb-3 col-xxl-6 col-sm-6">
											<div className="media align-items-center bgl-secondary rounded p-2">
												<div className="d-inline-block me-3 position-relative donut-chart-sale2">
													<Donut2 value={24}  backgroundColor="rgb(172, 57, 212)" backgroundColor2="rgba(0,0,0,0.1)" />
													<small className="text-secondary">24%</small>
												</div>
												<div className="media-body">
													<h4 className="fs-15 text-black font-w600 mb-0">Installment</h4>
													<span className="fs-14">$5,412</span>
												</div>
											</div>
										</div>
										<div className="col-xl-3 mb-3 col-xxl-6 col-sm-6">
											<div className="media bgl-success rounded p-2 align-items-center">
												<div className="d-inline-block me-3 position-relative donut-chart-sale2">
													<Donut2 value={74} backgroundColor="rgb(43, 193, 85)" backgroundColor2="rgba(0,0,0,0.1)" />
													<small className="text-success">74%</small>
												</div>
												<div className="media-body">
													<h4 className="fs-15 text-black font-w600 mb-0">Investment</h4>
													<span className="fs-14">$3,784</span>
												</div>
											</div>
										</div>
										<div className="col-xl-3 mb-3 col-xxl-6 col-sm-6">
											<div className="media bgl-info rounded p-2 align-items-center">
												<div className="d-inline-block me-3 position-relative donut-chart-sale2">
													<Donut2  value={34} backgroundColor="rgb(70, 30, 231)" backgroundColor2="rgba(0,0,0,0.1)" />
													<small className="text-info">34%</small>
												</div>
												<div className="media-body">
													<h4 className="fs-15 text-black font-w600 mb-0">Property</h4>
													<span className="fs-14">$3,784</span>
												</div>
											</div>
										</div>
										<div className="col-xl-3 mb-3 col-xxl-6 col-sm-6">
											<Link to={"#"} className="btn btn-outline-primary rounded d-block btn-lg" onClick={() => setSendMessage(true)} data-target="#newspends">+New Spends</Link>
											<Modal className="modal fade" id="newspends" show={sendMessage} centered>
												<div className="modal-dialog-centered" role="document">
													<div className="modal-content">
														<div className="modal-header">
															<h5 className="modal-title">Modal title</h5>
															<button type="button" className="close" onClick={() => setSendMessage(false)} ><span>&times;</span>
															</button>
														</div>
														<div className="modal-body">
															<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
														</div>
														<div className="modal-footer">
															<button type="button" className="btn btn-danger light" onClick={() => setSendMessage(false)} >Close</button>
															<button type="button" className="btn btn-primary">Save changes</button>
														</div>
													</div>
												</div>
											</Modal>
										</div>
									</div>
								</div>
							</div>
						</div>						
						<WalletTab /> 				
						
					</div>
				</div>
				<div className="col-xl-3 col-xxl-12">
					<div className="row">
						<div className="col-xl-12 col-xxl-6 col-sm-6">
							<div className="card bg-primary">
								<div className="card-body p-3">
									<div className="d-flex align-items-center">
										<span className="bg-white rounded-circle p-3 me-4">
											<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g opacity="0.98" clip-path="">
												<path d="M9.77812 2.0125C10.1062 2.69062 9.81641 3.51094 9.13828 3.83906C7.25156 4.74688 5.65469 6.15781 4.51719 7.92422C3.35234 9.73437 2.73438 11.8344 2.73438 14C2.73438 20.2125 7.7875 25.2656 14 25.2656C20.2125 25.2656 25.2656 20.2125 25.2656 14C25.2656 11.8344 24.6477 9.73437 23.4883 7.91875C22.3563 6.15234 20.7539 4.74141 18.8672 3.83359C18.1891 3.50547 17.8992 2.69063 18.2273 2.00703C18.5555 1.32891 19.3703 1.03906 20.0539 1.36719C22.4 2.49375 24.3852 4.24375 25.7906 6.44219C27.2344 8.69531 28 11.3094 28 14C28 17.7406 26.5453 21.257 23.8984 23.8984C21.257 26.5453 17.7406 28 14 28C10.2594 28 6.74297 26.5453 4.10156 23.8984C1.45469 21.2516 1.22342e-07 17.7406 1.66948e-07 14C1.99034e-07 11.3094 0.765625 8.69531 2.21484 6.44219C3.62578 4.24922 5.61094 2.49375 7.95156 1.36719C8.63516 1.04453 9.45 1.3289 9.77812 2.0125Z" fill="#1EAAE7"/>
												<path d="M8.67896 13.2726C8.41099 13.0047 8.27974 12.6547 8.27974 12.3047C8.27974 11.9547 8.41099 11.6047 8.67896 11.3367L12.1188 7.89685C12.6219 7.39373 13.2891 7.12029 13.9946 7.12029C14.7 7.12029 15.3727 7.3992 15.8704 7.89685L19.3102 11.3367C19.8461 11.8726 19.8461 12.7367 19.3102 13.2726C18.7743 13.8086 17.9102 13.8086 17.3743 13.2726L15.3563 11.2547L15.3563 19.0258C15.3563 19.7804 14.7438 20.3929 13.9891 20.3929C13.2344 20.3929 12.6219 19.7804 12.6219 19.0258L12.6219 11.2492L10.604 13.2672C10.079 13.8031 9.21489 13.8031 8.67896 13.2726Z" fill="#1EAAE7"/>
												</g>
												<defs>
												<clipPath id="clip11">
												<rect width="28" height="28" fill="white" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 28 28)"/>
												</clipPath>
												</defs>
											</svg>
										</span>
										<span className="fs-20 text-white">Transfer </span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-12 col-xxl-6 col-sm-6">
							<div className="card bg-success">
								<div className="card-body p-3">
									<div className="d-flex align-items-center">
										<span className="bg-white rounded-circle p-3 me-4">
											<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M22.1667 1.16669H5.83342C4.59574 1.16669 3.40875 1.65835 2.53358 2.53352C1.65841 3.40869 1.16675 4.59568 1.16675 5.83335V14C1.16675 14.3094 1.28966 14.6062 1.50846 14.825C1.72725 15.0438 2.024 15.1667 2.33341 15.1667H8.16675V25.6667C8.1662 25.8898 8.22965 26.1085 8.34959 26.2966C8.46952 26.4848 8.6409 26.6346 8.84342 26.7284C9.0464 26.8218 9.27195 26.855 9.49325 26.824C9.71455 26.7929 9.92228 26.699 10.0917 26.5534L13.4167 23.7067L16.7417 26.5534C16.9531 26.7341 17.222 26.8334 17.5001 26.8334C17.7782 26.8334 18.0471 26.7341 18.2584 26.5534L21.5834 23.7067L24.9084 26.5534C25.1197 26.7341 25.3887 26.8334 25.6667 26.8334C25.8355 26.8322 26.0023 26.7964 26.1567 26.7284C26.3593 26.6346 26.5306 26.4848 26.6506 26.2966C26.7705 26.1085 26.834 25.8898 26.8334 25.6667V5.83335C26.8334 4.59568 26.3418 3.40869 25.4666 2.53352C24.5914 1.65835 23.4044 1.16669 22.1667 1.16669ZM3.50008 12.8334V5.83335C3.50008 5.21452 3.74591 4.62102 4.1835 4.18344C4.62108 3.74585 5.21458 3.50002 5.83342 3.50002C6.45225 3.50002 7.04575 3.74585 7.48333 4.18344C7.92092 4.62102 8.16675 5.21452 8.16675 5.83335V12.8334H3.50008ZM24.5001 23.135L22.3417 21.28C22.1304 21.0993 21.8615 20.9999 21.5834 20.9999C21.3053 20.9999 21.0364 21.0993 20.8251 21.28L17.5001 24.1267L14.1751 21.28C13.9638 21.0993 13.6948 20.9999 13.4167 20.9999C13.1387 20.9999 12.8697 21.0993 12.6584 21.28L10.5001 23.135V5.83335C10.4986 5.01375 10.2813 4.20898 9.87008 3.50002H22.1667C22.7856 3.50002 23.3791 3.74585 23.8167 4.18344C24.2542 4.62102 24.5001 5.21452 24.5001 5.83335V23.135ZM22.1667 7.00002C22.1667 7.30944 22.0438 7.60619 21.825 7.82498C21.6062 8.04377 21.3095 8.16669 21.0001 8.16669H14.0001C13.6907 8.16669 13.3939 8.04377 13.1751 7.82498C12.9563 7.60619 12.8334 7.30944 12.8334 7.00002C12.8334 6.6906 12.9563 6.39386 13.1751 6.17506C13.3939 5.95627 13.6907 5.83335 14.0001 5.83335H21.0001C21.3095 5.83335 21.6062 5.95627 21.825 6.17506C22.0438 6.39386 22.1667 6.6906 22.1667 7.00002ZM22.1667 11.6667C22.1667 11.9761 22.0438 12.2729 21.825 12.4916C21.6062 12.7104 21.3095 12.8334 21.0001 12.8334H14.0001C13.6907 12.8334 13.3939 12.7104 13.1751 12.4916C12.9563 12.2729 12.8334 11.9761 12.8334 11.6667C12.8334 11.3573 12.9563 11.0605 13.1751 10.8417C13.3939 10.6229 13.6907 10.5 14.0001 10.5H21.0001C21.3095 10.5 21.6062 10.6229 21.825 10.8417C22.0438 11.0605 22.1667 11.3573 22.1667 11.6667ZM22.1667 16.3334C22.1667 16.6428 22.0438 16.9395 21.825 17.1583C21.6062 17.3771 21.3095 17.5 21.0001 17.5H14.0001C13.6907 17.5 13.3939 17.3771 13.1751 17.1583C12.9563 16.9395 12.8334 16.6428 12.8334 16.3334C12.8334 16.0239 12.9563 15.7272 13.1751 15.5084C13.3939 15.2896 13.6907 15.1667 14.0001 15.1667H21.0001C21.3095 15.1667 21.6062 15.2896 21.825 15.5084C22.0438 15.7272 22.1667 16.0239 22.1667 16.3334Z" fill="#2BC155"/>
											</svg>
										</span>
										<span className="fs-20 text-white">Send Invoices </span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header pb-0 border-0">
									<div>
										<h4 className="fs-20 text-black mb-0">Invoices Sent</h4>
										<span className="fs-12">Lorem ipsum dolor sit amet, consectetur</span>
									</div>
								</div>
								<div className="card-body">
									{contentBlog.map((data,index)=>(
										<div className="d-flex pb-3 border-bottom mb-3 align-items-center">
											<img src={data.images} alt="" className="rounded-circle me-3" width="50" />
											<div className="me-auto">
												<h6 className="fs-16 font-w600 mb-0"><a href="invoices.html" className="text-black">{data.title}</a></h6>
												<span className="fs-12">{data.time}</span>
											</div>
											<span className="fs-16 text-black font-w600">{data.price}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
				
		</Fragment>				
		
		
	)
}
export default MyWallet;
