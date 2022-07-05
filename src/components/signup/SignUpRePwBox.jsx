import React, { useState } from "react";

const SignUpRePwBox = ({ password }) => {
	const [rePw, setRePw] = useState("");
	function pwCheck(e) {
		setRePw(e.target.value);
		const info = document.querySelectorAll(".signup__pw-checkInfo");
		if (password !== rePw) {
			info[0].innerText = "비밀번호가 맞지 않습니다.";
			info[0].style.color = "red";
		} else {
			info[0].innerText = "비밀번호를 다시 입력해주세요.";
			info[0].style.color = "black";
		}
	}
	return (
		<div className="form-floating signup__pw-check">
			<input
				type="password"
				className="form-control pw-check"
				id="floatingPassword"
				value={rePw}
				placeholder="Repress Password"
				onChange={pwCheck}
			/>
			<label htmlFor="floatingPassword">Repress Password</label>
			<div className="signup__pw-checkInfo">비밀번호를 다시 입력해주세요.</div>
		</div>
	);
};

export default SignUpRePwBox;
