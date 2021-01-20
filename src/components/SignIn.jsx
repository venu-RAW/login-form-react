import React, { Component } from "react";
import Cookies from "js-cookie";
import { signInUrl } from "../api/apicalls";
import styles from "./SignIn.module.css";

import { withRouter } from "react-router-dom";

class SignIn extends Component {
	state = {
		email: "",
		password: "",
		isLoggedIn: false,
	};

	updateEmail = (event) => {
		this.setState({
			email: event.target.value,
		});
	};

	updatePassword = (event) => {
		this.setState({
			password: event.target.value,
		});
	};

	submitForm = async (event) => {
		event.preventDefault();
		try {
			let result = await fetch(signInUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				mode: "cors",
				body: JSON.stringify(this.state),
			});

			let response = await result.json();
			Cookies.set("jwt", `${response.data[0].jwt}`);
			this.setState({ isLoggedIn: true });
			this.props.history.push("/home");

			if (Cookies.get("jwt")) {
				console.log("User already logged in");
			} else {
				console.log("Log in");
			}
		} catch (err) {
			console.log(err);
		}
	};
	render() {
		return (
			<div className={styles.signInContainer}>
				<form className={styles.signInForm} onSubmit={this.submitForm}>
					<div className={`${styles.inputDiv} ${styles.focus}`}>
						{/* <div className={styles.i}>
							<i className="fa fa-user" aria-hidden="true"></i>
						</div> */}
						<div className={styles.input}>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								value={this.state.email}
								onChange={this.updateEmail}
							/>
						</div>
					</div>
					<div className={`${styles.inputDiv} ${styles.focus}`}>
						{/* <div className={styles.i}>
							<i className="fa fa-lock" aria-hidden="true"></i>
						</div> */}
						<div className={styles.input}>
							<label htmlFor="password">Password</label>
							<input
								type="password"
								name="password"
								id="password"
								value={this.state.password}
								onChange={this.updatePassword}
							/>
						</div>
					</div>
					<div className={styles.forgotPassword}>
						<p>Forgot password?</p>
					</div>
					<div>
						<input type="submit" className={styles.btn} value="Sign In" />
					</div>
				</form>
				{this.props.children}
			</div>
		);
	}
}

export default withRouter(SignIn);
