import {Link} from "react-router-dom";

const Home = () => {
	return (
		<div className="text-center">
			<h1>Home Page</h1>
			<Link to="/">Back</Link>
		</div>
	)
}

export default Home;