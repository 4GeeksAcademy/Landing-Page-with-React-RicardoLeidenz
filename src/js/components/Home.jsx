import React from "react";
import Nav from "./Nav.jsx"
import Card from "./Card.jsx"
import Jumbotron from "./Jumbotron.jsx"
import Footer from "./Footer.jsx"


const engines = [
	{
		title: "Godot",
		description: "Free, open-source engine for 2D/3D games. Features visual scripting, GDScript, lightweight editor, and a passionate developer community.",
		url: "https://godotengine.org/",
		logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/500px-Godot_icon.svg.png"
	},
	{
		title: "Unity",
		description: "Powerful, widely-used game engine for 2D/3D games. Supports C#, cross-platform deployment, VR/AR, and a massive asset ecosystem.",
		url: "https://unity.com/",
		logo:"https://images.seeklogo.com/logo-png/41/1/unity-logo-png_seeklogo-412622.png"
	},
	{
		title: "Pico8",
		description: "Fantasy console for making retro-style games. Restrictive design encourages creativity with built-in tools, Lua scripting, and charming pixel art.",
		url: "https://www.lexaloffle.com/pico-8.php",
		logo:"https://forums.cdn.launchbox.gg/monthly_2021_03/pico-8.thumb.png.ececf1a340ce821a1111bb1d416e3775.png"
	},
	{
		title: "Unreal Engine",
		description: "AAA-grade engine with stunning graphics. Uses Blueprints and C++, ideal for complex 3D games, simulations, and cinematic experiences.",
		url: "https://www.unrealengine.com/en-US",
		logo:"https://iconape.com/wp-content/png_logo_vector/cib-unreal-engine.png"
	}
]


//create your first component
const Home = () => {
	return (
		<div>
			<Nav/>
			<Jumbotron/>
			<div className="row justify-content-center">
				<div className="col-10 d-flex justify-content-center bg-body-secondary">
					{engines.map(
						(engine) =>{
							return(
								<Card 
									title={engine.title} 
									description={engine.description} 
									url={engine.url} 
									logo={engine.logo}
								/>
							)
						}
					)}
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;