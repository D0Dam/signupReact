import { useState } from "react";
import "./App.css";
import CatImg from "./components/CatImg";
import IdBox from "./components/IdBox";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import NavBox from "./components/NavBox";
import PwBox from "./components/PwBox";

function App() {
	const [idRoot, setIdRoot] = useState("");
	const [pwRoot, setPwRoot] = useState("");
	const getId = (id) => setIdRoot(id);
	const getPw = (pw) => setPwRoot(pw);
	return (
		<div className="App">
			<NavBox />
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

export default App;
