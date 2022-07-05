import React from "react";

const SignUpPwBox = () => {
	return (
		<div className="form-floating signup__pw">
			<input
				type="password"
				className="form-control pw"
				id="floatingPassword"
				placeholder="Password"
				onChange={() => "a"}
			/>
			<label htmlFor="floatingPassword">Password</label>
			<div className="signup__pwInfo">
				비밀번호는 8자리 이상, 영문과 숫자, 특수기호를 포함해야 합니다.
			</div>
		</div>
	);
};

export default SignUpPwBox;
