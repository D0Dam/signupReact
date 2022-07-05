import React, { useState } from "react";

const IdBox = ({ getId }) => {
	const [id, setId] = useState("");
	const onChangeId = (e) => {
		setId(e.target.value);
		getId(id);
	};
	return (
		<div>
			<div className="login__id">
				<div className="login__idtitle">아이디</div>
				<div className="form-floating">
					<input
						type="text"
						className="form-control id"
						id="floatingInput"
						placeholder="Id"
						value={id}
						onChange={onChangeId}
					/>
					<label htmlFor="floatingInput">ID</label>
				</div>
			</div>
		</div>
	);
};

export default IdBox;
