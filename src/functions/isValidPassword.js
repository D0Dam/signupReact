function isValidPassword(password) {
	const passwordRegExp =
		/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&\(\)\\])[A-Za-z\d$@$!%*#?&\(\)\\]{8,}$/;
	return password.match(passwordRegExp);
}

export default isValidPassword;
