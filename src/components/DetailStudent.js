import {useNavigate} from "react-router-dom";

const DetailStudent = () => {
	const navigate = useNavigate();

	return (
		<>
			<button onClick={() =>
				navigate('/admin/students')
			}>Back to List
			</button>
			<h2>Detail Student</h2>
		</>
	)
}

export default DetailStudent;