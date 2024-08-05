import {useNavigate} from "react-router-dom";

const Students = () => {
	const navigate = useNavigate();
	return (
		<>
			<button onClick={()=>
				navigate('add')
			}>Add</button>
			<h2>List Student</h2>
		</>
	)
}

export default Students;