import React from "react";

const SelectMajor = () => {
	return (
		<div className="signup__major">
			<select className="form-select" aria-label="Default select example">
				<option selected>Select your major</option>
				<option value="36">컴퓨터공학부</option>
				<option value="20">기계공학부</option>
				<option value="61">전자정보통신공학부</option>
				<option value="74">에너지신소재공학부</option>
				<option value="80">산업경영학부</option>
				<option value="51">디자인공학부</option>
				<option value="72">건축공학부</option>
			</select>
			<div className="signup__majorInfo">해당하는 학과를 선택해주세요.</div>
		</div>
	);
};

export default SelectMajor;
