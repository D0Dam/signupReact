import React, { useState } from "react";

const StudentNumber = () => {
	const [number, setNumber] = useState("");
	const [major, setMajor] = useState("");
	//이 함수 어덯게 처리할지 생가해봐야한다.
	function snToMajor(e) {
		setNumber(e.target.value);
		const sn = number.replace(/[^0-9]/, "");
		const str = sn.value;
		const majorN = str.substring(5, 7);
		setMajor(majorN);

		const majorList = document.querySelector(".form-select");
		const len = majorList.options.length;
		for (let i = 0; i < len; i++) {
			if (majorList.options[i].value == majorN) {
				majorList.options[i].selected = true;
			}
		}
	}
	return (
		<div className="form-floating signup__student-number">
			<input
				type="text"
				className="form-control student-number"
				id="floatingInput"
				value={number}
				placeholder="Press student-number"
				onChange={snToMajor}
				maxLength="10"
			/>
			<label htmlFor="floatingInput">Student number</label>
			<div className="signup__student-numberInfo">학번을 입력해주세요.</div>
		</div>
	);
};

export default StudentNumber;
