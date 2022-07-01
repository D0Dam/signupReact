import React, { useEffect } from "react";
import axios from "axios";
const CatImg = () => {
	useEffect(() => {
		axios
			.get("https://api.thecatapi.com/v1/images/search?size=full")
			.then((response) => {
				const resData = response.data;
				const imgUrl = resData[0].url;
				document.getElementById("catImg").src = imgUrl;
			})
			.catch((error) => console.log(new Error(error)));
	});
	return (
		<div>
			<div id="apis">
				<img id="catImg" src="" width="168" />
			</div>
		</div>
	);
};

export default CatImg;
