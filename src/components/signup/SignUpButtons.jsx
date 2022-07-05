import React from "react";

const SignupButtons = () => {
	return (
		<div className="signup__button">
			<button
				type="button"
				className="btn btn-primary signup__signup-button"
				onClick={() => "a"}
			>
				signUp
			</button>
			<button
				type="button"
				className="btn btn-primary signup__cancel-button"
				onClick={() => "a"}
			>
				Cancel
			</button>
		</div>
	);
};

export default SignupButtons;
