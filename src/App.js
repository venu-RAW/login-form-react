import { Component } from "react";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import styles from "./App.module.css";
import loginImage from "./images/undraw_Login.png";

class App extends Component {
	state = {
		isSignInActive: true,
		isSignUpActive: false,
	};

	showSignIn = () => {
		this.setState({ isSignInActive: true, isSignUpActive: false });
	};

	showSignUp = () => {
		this.setState({ isSignInActive: false, isSignUpActive: true });
	};

	render() {
		const style = {
			textDecoration: "underline",
			textUnderlinePosition: "under",
			color: "blue",
			textAlign: "right",
			cursor: "pointer",
			fontSize: ".9rem",
			marginTop: "1rem",
		};

		return (
			<div className={styles.container}>
				<div className={styles.imageContainer}>
					<img src={loginImage} alt="venu" />
				</div>
				<div className={styles.componentContainer}>
					<div className={styles.formContainer}>
						{this.state.isSignInActive && (
							<SignIn>
								{" "}
								<div
									className="signup-controller"
									onClick={this.showSignUp}
									style={style}
								>
									Don't have an account, Sign up here!
								</div>{" "}
							</SignIn>
						)}
						{this.state.isSignUpActive && (
							<SignUp>
								<div
									className="signin-controller"
									onClick={this.showSignIn}
									style={style}
								>
									Already have an account, Sign in here!
								</div>{" "}
							</SignUp>
						)}
					</div>
					{/* <div className={styles.controllers}>
						<div className="signin-controller" onClick={this.showSignIn}>
							Sign in
						</div>
						<div className="signup-controller" onClick={this.showSignUp}>
							Don't have an account, Sign up here!
						</div>
					</div> */}
				</div>
			</div>
		);
	}
}

export default App;
