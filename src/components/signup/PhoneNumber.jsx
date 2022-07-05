import React, { useState } from "react";

const PhoneNumber = () => {
	const [phone, setPhone] = useState("");
	function pnAutoHyphen(e) {
		setPhone(e.target.value);
		setPhone((p) =>
			p.replace(/[^0-9]/, "").replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
		);
	}
	return (
		<div className="form-floating signup__phone-number">
			<input
				type="text"
				className="form-control phone-number"
				id="floatingInput"
				value={phone}
				placeholder="Press phone-number"
				onChange={pnAutoHyphen}
				maxLength="13"
			/>
			<label htmlFor="floatingInput">Phone number</label>
			<div className="signup__phone-numberInfo">핸드폰번호를 입력해주세요.</div>
		</div>
	);
};

export default PhoneNumber;
