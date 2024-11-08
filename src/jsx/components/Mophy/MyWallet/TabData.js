import React from 'react';
import {Link} from 'react-router-dom';

import avt10 from './../../../../images/avatar/10.png';
import avt11 from './../../../../images/avatar/11.png';
import avt12 from './../../../../images/avatar/12.png';
import avt13 from './../../../../images/avatar/13.png';
import avt14 from './../../../../images/avatar/14.png';


// const accordionBlog = [
// 	{	
// 		image: avt10, title: 'XYZ STore ID', subtitle: 'Online Shop', date: 'June 1, 2023',
// 		icon: <IconGreen />,  price: '+$5,553' , status: <CompleteBlog />, cardbody: <AccordBox />,
// 	},
// 	{
// 		image: avt11, title: 'Andrew Lee', date: 'June 3, 2023',
// 		icon: <IconRed />,  	 price: '+$2,351' , status: <CancelBlog />, cardbody: <AccordBox />,
// 	},
// 	{
// 		image: avt12, title: 'Olivia Brownlee', date: 'June 4, 2023',
// 		icon: <IconGreen />,  price: '+$3,453' , status: <CompleteBlog />, cardbody: <AccordBox />,
// 	},
// 	{
// 		image: avt13, title: 'Popo Store', subtitle: 'Online Shop', date: 'June 6, 2023',
// 		icon: <IconGreen />,  price: '+$6,124' , status: <PendingBlog />, cardbody: <AccordBox />,
// 	},
// 	{	
// 		image: avt14, title: 'Peter Parkur', date: 'June 9, 2023',
// 		icon: <IconRed />,    price: '+$2,624' , status: <PendingBlog />, cardbody: <AccordBox />,
// 	},
// ];


const TabData = () =>{
		
} 
function CancelBlog(){
	return(
		<Link to={"#"} className="mb-lg-0 mb-3 btn btn-outline-dark btn-md btn-rounded mx-2">Canceled</Link>
	)	
}
function CompleteBlog(){
	return(
		<Link to={"#"} className="mb-lg-0 mb-3 btn btn-outline-success btn-md btn-rounded mx-2">Completed</Link>
	)	
}
function PendingBlog(){
	return(
		<Link to={"#"} className="mb-lg-0 mb-3 btn btn-outline-warning btn-md btn-rounded mx-2">Pending</Link>
	)	
}

function IconGreen(){
	return(
		<>
			<span className="bg-success">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip3)">
					<path d="M10.4125 14.85C10.225 14.4625 10.3906 13.9937 10.7781 13.8062C11.8563 13.2875 12.7688 12.4812 13.4188 11.4719C14.0844 10.4375 14.4375 9.23749 14.4375 7.99999C14.4375 4.44999 11.55 1.56249 8 1.56249C4.45 1.56249 1.5625 4.44999 1.5625 7.99999C1.5625 9.23749 1.91562 10.4375 2.57812 11.475C3.225 12.4844 4.14062 13.2906 5.21875 13.8094C5.60625 13.9969 5.77187 14.4625 5.58437 14.8531C5.39687 15.2406 4.93125 15.4062 4.54062 15.2187C3.2 14.575 2.06562 13.575 1.2625 12.3187C0.4375 11.0312 -4.16897e-07 9.53749 -3.49691e-07 7.99999C-2.56258e-07 5.86249 0.83125 3.85312 2.34375 2.34374C3.85313 0.831242 5.8625 -7.37314e-06 8 -7.2797e-06C10.1375 -7.18627e-06 12.1469 0.831243 13.6563 2.34374C15.1688 3.85624 16 5.86249 16 7.99999C16 9.53749 15.5625 11.0312 14.7344 12.3187C13.9281 13.5719 12.7938 14.575 11.4563 15.2187C11.0656 15.4031 10.6 15.2406 10.4125 14.85Z" fill="white"/>
					<path d="M11.0407 8.41563C11.1938 8.56876 11.2688 8.76876 11.2688 8.96876C11.2688 9.16876 11.1938 9.36876 11.0407 9.52188L9.07503 11.4875C8.78753 11.775 8.40628 11.9313 8.00315 11.9313C7.60003 11.9313 7.21565 11.7719 6.93127 11.4875L4.96565 9.52188C4.6594 9.21563 4.6594 8.72188 4.96565 8.41563C5.2719 8.10938 5.76565 8.10938 6.0719 8.41563L7.22502 9.56876L7.22502 5.12814C7.22502 4.69689 7.57503 4.34689 8.00628 4.34689C8.43753 4.34689 8.78753 4.69689 8.78753 5.12814L8.78753 9.57188L9.94065 8.41876C10.2407 8.11251 10.7344 8.11251 11.0407 8.41563Z" fill="white"/>
					</g>
					<defs>
					<clipPath id="clip3">
					<rect width="16" height="16" fill="white" transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 -7.62939e-06)"/>
					</clipPath>
					</defs>
				</svg>
			</span>
		</>
	)
}
function IconRed(){
	return(
		<>
			<span className="bg-danger">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip1)">
					<path d="M10.4125 1.15001C10.225 1.53751 10.3906 2.00627 10.7781 2.19377C11.8563 2.71252 12.7688 3.51876 13.4188 4.52814C14.0844 5.56251 14.4375 6.76251 14.4375 8.00001C14.4375 11.55 11.55 14.4375 8 14.4375C4.45 14.4375 1.5625 11.55 1.5625 8.00002C1.5625 6.76251 1.91562 5.56252 2.57812 4.52501C3.225 3.51564 4.14062 2.70939 5.21875 2.19064C5.60625 2.00314 5.77187 1.53752 5.58437 1.14689C5.39687 0.759391 4.93125 0.593765 4.54062 0.781265C3.2 1.42502 2.06562 2.42501 1.2625 3.68126C0.4375 4.96877 -4.16897e-07 6.46251 -3.49691e-07 8.00002C-2.56258e-07 10.1375 0.83125 12.1469 2.34375 13.6563C3.85313 15.1688 5.8625 16 8 16C10.1375 16 12.1469 15.1688 13.6563 13.6563C15.1688 12.1438 16 10.1375 16 8.00001C16 6.46251 15.5625 4.96876 14.7344 3.68126C13.9281 2.42814 12.7938 1.42501 11.4563 0.781265C11.0656 0.59689 10.6 0.759389 10.4125 1.15001Z" fill="white"/>
					<path d="M11.0407 7.58437C11.1938 7.43125 11.2688 7.23125 11.2688 7.03125C11.2688 6.83125 11.1938 6.63125 11.0407 6.47812L9.07503 4.5125C8.78753 4.225 8.40628 4.06875 8.00315 4.06875C7.60003 4.06875 7.21565 4.22813 6.93127 4.5125L4.96565 6.47812C4.6594 6.78437 4.6594 7.27812 4.96565 7.58437C5.2719 7.89062 5.76565 7.89062 6.0719 7.58437L7.22502 6.43125L7.22502 10.8719C7.22502 11.3031 7.57503 11.6531 8.00628 11.6531C8.43753 11.6531 8.78753 11.3031 8.78753 10.8719L8.78753 6.42812L9.94065 7.58125C10.2407 7.8875 10.7344 7.8875 11.0407 7.58437Z" fill="white"/>
					</g>
					<defs>
					<clipPath id="clip1">
					<rect width="16" height="16" fill="white" transform="translate(0 16) rotate(-90)"/>
					</clipPath>
					</defs>
				</svg>
			</span>
		</>
	)
}
function AccordBox(){
	return(
		<>
			<div className="d-flex flex-wrap align-items-center accordion__body--text p-0">
				<div className="me-3 mb-3">
					<p className="fs-12 mb-2">ID Payment</p>
					<span className="text-black font-w500">#00123521</span>
				</div>
				<div className="me-3 mb-3">
					<p className="fs-12 mb-2">Payment Method</p>
					<span className="text-black font-w500">MasterCard 404</span>
				</div>
				<div className="me-3 mb-3">
					<p className="fs-12 mb-2">Invoice Date</p>
					<span className="text-black font-w500">April 29, 2023</span>
				</div>
				<div className="me-3 mb-3">
					<p className="fs-12 mb-2">Due Date</p>
					<span className="text-black font-w500">June 5, 2023</span>
				</div>
				<div className="me-3 mb-3">
					<p className="fs-12 mb-2">Date Paid</p>
					<span className="text-black font-w500">June 4, 2023</span>
				</div>
				<div className="d-flex p-3 rounded bgl-dark align-items-center mb-3">
					<svg className="me-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z" fill="#A4A4A4"/>
						<path d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z" fill="#A4A4A4"/>
						<path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z" fill="#A4A4A4"/>
					</svg>
					<p className="mb-0 fs-14">Lorem ipsum dolor sit<br /> amet, consectetur </p>
				</div>
			</div>
		
		</>
	)
}
// export {accordionBlog,IconRed,PendingBlog,
// 	IconGreen, CompleteBlog, AccordBox};	
//export default TabData;