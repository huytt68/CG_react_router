import {useNavigate} from "react-router-dom";

const AddStudent = () => {
	const navigate = useNavigate();

	return (
		<>
			<button onClick={() =>
				navigate('/admin/students')
			}>Back to List
			</button>
			<h2>Add Student</h2>
		</>
	)
}

export default AddStudent;