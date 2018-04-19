// import React, {Component} from 'react';
import React from "react";
import './header.css';

const Header = ()=>	{
	return <header class="main-header">
			<div class="container-fluid">
				<h1 class="text-center">
					<strong>Clicky Game</strong>
				</h1>
				<p class="text-center">
					<strong>Don't Click the Same Shape Twice</strong>
				</p>
			</div>
		</header>;
}
export default Header;