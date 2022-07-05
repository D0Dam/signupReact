import React, { useState } from "react";
import isValidEmail from "../../functions/isValidEmail";

const SignUpIdBox = () => {
	const [id, setId] = useState("");
	const idChange = (e) => {
		setId(e.target.value);
		const info = document.querySelectorAll(".signup__idInfo");
		if (!isValidEmail(id)) {
			console.log(id);
			info[0].style.color = "red";
		} else {
			info[0].style.color = "black";
		}
	};
	return (
		<div className="form-floating signup__id">
			<input
				type="text"
				className="form-control id"
				id="floatingInput"
				value={id}
				placeholder="Id"
				onChange={idChange}
			/>
			<label htmlFor="floatingInput">ID</label>
			<div className="signup__idInfo">
				아이디는 이메일 형식으로 작성해주세요
			</div>
		</div>
	);
};

export default SignUpIdBox;
