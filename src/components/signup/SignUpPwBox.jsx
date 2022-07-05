import React, { useState } from "react";
import isValidPassword from "../../functions/isValidPassword";
const SignUpPwBox = () => {
	const [pw, setPw] = useState("");
	const pwChange = (e) => {
		setPw(e.target.value);
		const info = document.querySelectorAll(".signup__pwInfo");
		if (!isValidPassword(pw)) {
			info[0].style.color = "red";
		} else {
			info[0].style.color = "black";
		}
	};
	return (
		<div className="form-floating signup__pw">
			<input
				type="password"
				className="form-control pw"
				id="floatingPassword"
				value={pw}
				placeholder="Password"
				onInput={pwChange}
			/>
			<label htmlFor="floatingPassword">Password</label>
			<div className="signup__pwInfo">
				비밀번호는 8자리 이상, 영문과 숫자, 특수기호를 포함해야 합니다.
			</div>
		</div>
	);
};

export default SignUpPwBox;
