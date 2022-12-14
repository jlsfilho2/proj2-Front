import React from "react";
import { 
	Container,
	Img,

} from "./style";
import loading from "../../../assets/loading.svg"

function Loader(props) {

	return (
		<Container>
			<Img src={loading} alt="Loading"></Img>
		</Container>
	);
}

export default Loader;