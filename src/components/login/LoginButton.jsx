import React, { useState } from "react";
import isValidEmail from "../../functions/isValidEmail";
import isValidPassword from "../../functions/isValidPassword";

const LoginButton = ({ id, pw }) => {
	const [countFail, setCountFail] = useState(0);
	const loginButtonClick = () => {
		console.log(id, pw);
		if (!id && !pw) {
			alert("id와 password가 입력되지 않았습니다.");
			setCountFail(() => countFail + 1);
		} else if (!id) {
			alert("id가 입력되지 않았습니다.");
			setCountFail(() => countFail + 1);
		} else if (!pw) {
			alert("password가 입력되지 않았습니다.");
			setCountFail(() => countFail + 1);
		} else {
			if (!isValidEmail(id)) {
				alert("올바르지 않은 id 형식입니다.");
				setCountFail(() => countFail + 1);
			} else if (!isValidPassword(pw)) {
				alert("올바르지 않은 password 형식입니다.");
				setCountFail(() => countFail + 1);
			} else {
				alert("로그인!");
			}
		}
	};
	return (
		<div>
			<div className="login__button">
				<button
					type="button"
					className="btn btn-outline-primary login__login-button"
					onClick={loginButtonClick}
				>
					login
				</button>
			</div>
		</div>
	);
};

export default LoginButton;
