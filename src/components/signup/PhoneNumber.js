import React from "react";

const PhoneNumber = () => {
	return (
		<div className="form-floating signup__phone-number">
			<input
				type="text"
				className="form-control phone-number"
				id="floatingInput"
				placeholder="Press phone-number"
				onInput={() => "a"}
				maxLength="13"
			/>
			<label htmlFor="floatingInput">Phone number</label>
			<div className="signup__phone-numberInfo">핸드폰번호를 입력해주세요.</div>
		</div>
	);
};

export default PhoneNumber;
