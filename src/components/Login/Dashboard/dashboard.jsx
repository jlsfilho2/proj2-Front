import React from "react";
import { useUserContext } from "../../../context/userContext";
import { Container } from "./style";

const Dashboard = () => {
	const { user, logoutUser } = useUserContext();
	return (
		<Container>
			<div className="dashboard">
				<h1>Dashboard </h1>
				<h2>Nome: {user.displayName}</h2>
				<h2>Email: {user.email}</h2>
				<button onClick={logoutUser}>Sair</button>
			</div>
		</Container>
	);
};

export default Dashboard;
