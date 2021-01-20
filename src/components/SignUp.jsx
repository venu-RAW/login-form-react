import React, { Component } from "react";
import { signUpUrl } from "../api/apicalls";

import styles from "./SignUp.module.css";

class SignUp extends Component {
	state = {
		email: "",
		password: "",
		confirmPass: "",
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

	updateConfirmPass = (event) => {
		this.setState({
			confirmPass: event.target.value,
		});
	};

	submitForm = async (event) => {
		event.preventDefault();

		let result = await fetch(signUpUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
			body: JSON.stringify(this.state),
		});

		let response = await result.json();
		console.log(response);
	};

	render() {
		return (
			<div className={styles.signUpContainer}>
				<form className={styles.signUpForm} onSubmit={this.submitForm}>
					<div className={`${styles.inputDiv} ${styles.focus}`}>
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
					<div className={`${styles.inputDiv} ${styles.focus}`}>
						<div className={styles.input}>
							<label htmlFor="confirmPass">Confirm Password</label>
							<input
								type="password"
								name="confirmPass"
								id="confirmPass"
								value={this.state.confirmPass}
								onChange={this.updateConfirmPass}
							/>
						</div>
					</div>
					<div>
						<input type="submit" className={styles.btn} value="SignUp" />
					</div>
				</form>
				{this.props.children}
			</div>
		);
	}
}

export default SignUp;
