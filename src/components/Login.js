import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCubes} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const Login = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [warning, setWarning] = useState(0);
	const navigate = useNavigate();

	const handleUsernameInput = (e) => {
		setUsername(e.target.value);
	}

	const handlPasswordInput = (e) => {
		setPassword(e.target.value);
		console.log(e.target.value);
	}

	const handleClickLogin = () => {
		if(username === '' || password === '') {
			setWarning(1);
		} else if(username === 'admin' && password === 'admin') {
			setWarning(0);
			navigate('/home');
		} else {
			setWarning(2);
		}
	}

	return (
		<>
			<section className="vh-100" style={{backgroundColor: "#9A616D"}}>
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col col-xl-10">
							<div className="card" style={{borderRadius: "1rem"}}>
								<div className="row g-0">
									{/*anh*/}
									<div className="col-md-6 col-lg-5 d-none d-md-block">
										<img
											src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
											alt="login form"
											className="img-fluid"
											style={{borderRadius: "1rem 0 0 1rem"}}
										/>
									</div>
									{/*form*/}
									<div className="col-md-6 col-lg-7 d-flex align-items-start">
										<div className="card-body mt-3 mt-md-4 mt-lg-5 p-3 p-md-4 p-lg-5 text-black">
											<form>
												<div className="d-flex align-items-center mb-3 pb-1 justify-content-center">
													<FontAwesomeIcon icon={faCubes} color={'#9A616D'} size={'2x'} className='me-2'/>
													<span className="h1 fw-bold mb-0">Login</span>
												</div>
												<h5
													className="fw-normal mb-3 pb-3 text-center"
													style={{letterSpacing: 1}}
												>
													Sign into your account
												</h5>
												<div className="form-floating mb-4">
													<input
														type="email"
														className="form-control form-control-lg"
														placeholder="Username"
														value={username}
														onChange={e=>handleUsernameInput(e)}
													/>
													<label className="form-label">
														Username
													</label>
												</div>
												<div className="form-floating mb-4">
													<input
														type="password"
														className="form-control form-control-lg"
														placeholder="Password"
														value={password}
														onChange={e=>handlPasswordInput(e)}
													/>
													<label className="form-label">
														Password
													</label>
												</div>
												<div className="pt-1 mb-4">
													<button
														className="btn btn-dark btn-lg btn-block w-100"
														type="button"
														onClick={handleClickLogin}
													>
														Login
													</button>
												</div>
												<p className="mb-0 pb-lg-2" style={{color: "#393f81"}}>
													Don't have an account?{" "}
													<Link to={'/register'} style={{color: "#393f81"}}>
														Register here
													</Link>
												</p>
												<div className={"pt-2"}>
													{warning===1 && <span style={{color:'red'}}>Please enter username & password</span>}
													{warning===2 && <span style={{color:'red'}}>Wrong username or password</span>}
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Login;