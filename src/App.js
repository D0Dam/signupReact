import React from "react";
import LoginPage from "./routes/LoginPage";
import "./App.css";
import LogoutPage from "./routes/LogoutPage";
import NavBox from "./components/NavBox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
	return (
		<BrowserRouter>
			<NavBox />
			<Routes>
				<Route path="/signupReact" element={<LoginPage />} />
				<Route path="/signupReact2" element={<LogoutPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
