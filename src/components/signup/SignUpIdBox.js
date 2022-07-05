import React from "react";

const SignUpIdBox = () => {
	return (
		<div className="form-floating signup__id">
			<input
				type="text"
				className="form-control id"
				id="floatingInput"
				placeholder="Id"
				onChange={() => "a"}
			/>
			<label htmlFor="floatingInput">ID</label>
			<div className="signup__idInfo">
				아이디는 이메일 형식으로 작성해주세요
			</div>
		</div>
	);
};

export default SignUpIdBox;
