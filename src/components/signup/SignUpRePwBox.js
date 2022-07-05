import React from "react";

const SignUpRePwBox = () => {
	return (
		<div className="form-floating signup__pw-check">
			<input
				type="password"
				className="form-control pw-check"
				id="floatingPassword"
				placeholder="Repress Password"
				onInput={() => "a"}
			/>
			<label htmlFor="floatingPassword">Repress Password</label>
			<div className="signup__pw-checkInfo">비밀번호를 다시 입력해주세요.</div>
		</div>
	);
};

export default SignUpRePwBox;
