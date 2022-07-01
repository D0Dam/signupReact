import React, { useState } from "react";

const PwBox = ({ getPw }) => {
	const [pw, setPw] = useState("");
	const onChangePw = (e) => {
		setPw(e.target.value);
		getPw(pw);
	};
	return (
		<div>
			<div className="login__pw">
				<div className="login__pwtitle">비밀번호</div>
				<div className="form-floating">
					<input
						type="password"
						className="form-control pw"
						id="floatingPassword"
						placeholder="Password"
						value={pw}
						onChange={onChangePw}
					/>
					<label htmlFor="floatingPassword">Password</label>
				</div>
			</div>
		</div>
	);
};

export default PwBox;
