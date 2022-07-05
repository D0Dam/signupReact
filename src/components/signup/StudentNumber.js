import React from "react";

const StudentNumber = () => {
	return (
		<div className="form-floating signup__student-number">
			<input
				type="text"
				className="form-control student-number"
				id="floatingInput"
				placeholder="Press student-number"
				onInput={() => ""}
				maxLength="10"
			/>
			<label htmlFor="floatingInput">Student number</label>
			<div className="signup__student-numberInfo">학번을 입력해주세요.</div>
		</div>
	);
};

export default StudentNumber;
