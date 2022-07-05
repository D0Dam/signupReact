import React from "react";
import { Link } from "react-router-dom";

const NavBox = () => {
	return (
		<div>
			<ul className="nav nav-pills nav-fill">
				<li className="nav-item nav__item">
					<Link className="nav-link signin-link" to="/signupReact">
						loginPage
					</Link>
				</li>
				<li className="nav-item nav__item">
					<Link className="nav-link signup-link" to="/signupReact2">
						signUpPage
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBox;
