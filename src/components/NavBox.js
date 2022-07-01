import React from "react";

const NavBox = () => {
	return (
		<div>
			<ul className="nav nav-pills nav-fill">
				<li className="nav-item nav__item">
					<a className="nav-link signin-link" href="./mainLoginPage.html">
						loginPage
					</a>
				</li>
				<li className="nav-item nav__item">
					<a className="nav-link signup-link" href="./mainSignUpPage.html">
						signUpPage
					</a>
				</li>
			</ul>
		</div>
	);
};

export default NavBox;
