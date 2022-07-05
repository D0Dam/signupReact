function isValidEmail(email) {
	const emailRegExp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	return email.match(emailRegExp);
}

export default isValidEmail;
