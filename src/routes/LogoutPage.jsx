import React from "react";
import PhoneNumber from "../components/signup/PhoneNumber";
import SelectMajor from "../components/signup/SelectMajor";
import SignUpButtons from "../components/signup/SignUpButtons";
import SignUpIdBox from "../components/signup/SignUpIdBox";
import SignUpPwBox from "../components/signup/SignUpPwBox";
import SignUpRePwBox from "../components/signup/SignUpRePwBox";
import StudentNumber from "../components/signup/StudentNumber";

const LogoutPage = () => {
	return (
		<div>
			<div className="signup">
				<div className="signup__title">SignUp</div>
				<SignUpIdBox />
				<SignUpPwBox />
				<SignUpRePwBox />
				<StudentNumber />
				<SelectMajor />
				<PhoneNumber />
				<SignUpButtons />
			</div>
		</div>
	);
};

export default LogoutPage;
