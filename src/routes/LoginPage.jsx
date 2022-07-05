import { useState } from "react";
import CatImg from "../components/login/CatImg";
import IdBox from "../components/login/IdBox";
import LoginButton from "../components/login/LoginButton";
import LogoutButton from "../components/login/LogoutButton";
import PwBox from "../components/login/PwBox";

function LoginPage() {
	const [idRoot, setIdRoot] = useState("");
	const [pwRoot, setPwRoot] = useState("");
	const getId = (id) => setIdRoot(id);
	const getPw = (pw) => setPwRoot(pw);
	return (
		<div className="App">
			<div className="login">
				<div className="login__title">Sign-in Page</div>
				<IdBox getId={getId} />
				<PwBox getPw={getPw} />
				<div className="signin__buttons">
					<LoginButton id={idRoot} pw={pwRoot} />
					<LogoutButton />
				</div>
				<CatImg />
			</div>
		</div>
	);
}

export default LoginPage;
