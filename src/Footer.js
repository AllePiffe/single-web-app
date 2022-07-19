import React from "react";
import Navbar from "./Navbar";

function Footer(attr){
	return(
		
<div className="footer-component footer mt-auto py-3">
	<footer className="mastfoot mt-auto">
				<div className="inner">
					<Navbar state ={attr.state} clickCallback ={attr.clickCallback} label={[{name: "policy"},{ name :"privacy"}]}/>
					<span>Corso Front End, by</span> <strong>Tutti i corsisti!</strong>
				</div>
			</footer>
		</div>
	)
}
export default Footer
