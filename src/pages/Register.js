import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCubes} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Register = () => {
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
											className="img-fluid object-fit-fill"
											style={{borderRadius: "1rem 0 0 1rem"}}
										/>
									</div>
									{/*form*/}
									<div className="col-md-6 col-lg-7 d-flex align-items-start">
										<div className="card-body mt-3 mt-md-4 mt-lg-5 p-3 p-md-4 p-lg-5 text-black">
											<form>
												<div className="d-flex align-items-center mb-3 pb-1 justify-content-center">
													<FontAwesomeIcon icon={faCubes} color={'#9A616D'} size={'2x'} className='me-2'/>
													<span className="h1 fw-bold mb-0">Register</span>
												</div>
												<h5
													className="fw-normal mb-3 pb-3 text-center"
													style={{letterSpacing: 1}}
												>
													Create your new account
												</h5>
												<div className="d-flex mb-4 justify-content-between">
													<div className="form-floating me-1">
														<input
															type="text"
															className="form-control form-control-lg"
															placeholder="First name"
														/>
														<label className="form-label">
															First name
														</label>
													</div>
													<div className="form-floating ms-1">
														<input
															type="text"
															className="form-control form-control-lg"
															placeholder="Last name"
														/>
														<label className="form-label">
															Last name
														</label>
													</div>
												</div>
												<div className="form-floating mb-4">
													<input
														type="text"
														className="form-control form-control-lg"
														placeholder="Username"
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
													/>
													<label className="form-label">
														Password
													</label>
												</div>
												<div className="pt-1 mb-4">
													<button
														className="btn btn-dark btn-lg btn-block w-100"
														type="button"
													>
														Sign up
													</button>
												</div>
												<p className="mb-2 pb-lg-2" style={{color: "#393f81"}}>
													Already have an account?{" "}
													<Link to={'/'} style={{color: "#393f81"}}>
														Log in
													</Link>
													<span></span>
												</p>
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

export default Register;