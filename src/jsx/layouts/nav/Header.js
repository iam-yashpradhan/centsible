import React from "react";

import { Link } from "react-router-dom";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import LogoutPage from './Logout';
/// Image
import profile from "../../../images/profile/17.jpg";
import avatar from "../../../images/avatar/1.jpg";
import { Dropdown } from "react-bootstrap";

const Header = ({ onNote, toggle, onProfile, onNotification, onClick }) => {
  var path = window.location.pathname.split("/");
 // var name = path[path.length - 1].split("-");
 /*  var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
  var finalName = filterName.includes("app")
    ? filterName.filter((f) => f !== "app")
    : filterName.includes("ui")
    ? filterName.filter((f) => f !== "ui")
    : filterName.includes("uc")
    ? filterName.filter((f) => f !== "uc")
    : filterName.includes("basic")
    ? filterName.filter((f) => f !== "basic")
    : filterName.includes("jquery")
    ? filterName.filter((f) => f !== "jquery")
    : filterName.includes("table")
    ? filterName.filter((f) => f !== "table")
    : filterName.includes("page")
    ? filterName.filter((f) => f !== "page")
    : filterName.includes("email")
    ? filterName.filter((f) => f !== "email")
    : filterName.includes("ecom")
    ? filterName.filter((f) => f !== "ecom")
    : filterName.includes("chart")
    ? filterName.filter((f) => f !== "chart")
    : filterName.includes("editor")
    ? filterName.filter((f) => f !== "editor")
    : filterName; */
  return (
    <div className="header">
		<div className="header-content">
			<nav className="navbar navbar-expand">
				<div className="collapse navbar-collapse justify-content-between">
					{/* <div className="header-left">
						<div
							className="dashboard_bar"
							style={{ textTransform: "capitalize" }}
						  >
							{finalName.join(" ").length === 0
							  ? "Dashboard"
							  : finalName.join(" ")}
						</div>
					</div> */}		
					<div className="header-left">
						<div className="dashboard_bar">
							
						</div>
					</div>

					<ul className="navbar-nav header-right">
						

						
						<Dropdown as="li" className="nav-item header-profile ">
							<Dropdown.Toggle
							  as="a"
							  to="#"
							  variant=""
							  className="nav-link i-false c-pointer"
							>
								<div className="header-info">
									<span className="text-black">Hello,<strong>Franklin</strong></span>
									<p className="fs-12 mb-0">Super Admin</p>
								</div>
								<img src={profile} width={20} alt="" />
							</Dropdown.Toggle>
							<Dropdown.Menu align="end" className="mt-2">
							  <Link to="/app-profile" className="dropdown-item ai-icon">
								<svg
								  id="icon-user1"
								  xmlns="http://www.w3.org/2000/svg"
								  className="text-primary"
								  width={18}
								  height={18}
								  viewBox="0 0 24 24"
								  fill="none"
								  stroke="currentColor"
								  strokeWidth={2}
								  strokeLinecap="round"
								  strokeLinejoin="round"
								>
								  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
								  <circle cx={12} cy={7} r={4} />
								</svg>
								<span className="ms-2">Profile </span>
							  </Link>
							  <Link to="/email-inbox" className="dropdown-item ai-icon">
								<svg
								  id="icon-inbox"
								  xmlns="http://www.w3.org/2000/svg"
								  className="text-success"
								  width={18}
								  height={18}
								  viewBox="0 0 24 24"
								  fill="none"
								  stroke="currentColor"
								  strokeWidth={2}
								  strokeLinecap="round"
								  strokeLinejoin="round"
								>
								  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
								  <polyline points="22,6 12,13 2,6" />
								</svg>
								<span className="ms-2">Inbox </span>
							  </Link>
							  <LogoutPage />
							</Dropdown.Menu>
						</Dropdown>
					</ul>
				</div>
			</nav>
		</div>
    </div>
  );
};

export default Header;
