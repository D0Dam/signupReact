import React from "react";

const LogoutButton = () => {
	return (
		<div>
			<div className="logout__button">
				<button
					type="button"
					className="btn btn-outline-primary login__logout-button"
					onClick="logoutButtonClick"
				>
					logout
				</button>
			</div>
		</div>
	);
};

export default LogoutButton;
