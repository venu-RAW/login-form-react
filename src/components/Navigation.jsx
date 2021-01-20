import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
	return (
		<div className={styles.navContainer}>
			<nav className={styles.nav}>
				<div className={styles.logo}>
					<h1>Logo.</h1>
				</div>
				<ul>
					<li>
						<Link to="/home" className={styles.a}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/dashboard" className={styles.a}>
							Dashboard
						</Link>
					</li>
					<li>
						<Link to="/" className={styles.a}>
							Logout
						</Link>
					</li>
				</ul>
				<div className={styles.hamburger}>
					<span className={styles.hamLine1}></span>
					<span className={styles.hamLine2}></span>
					<span className={styles.hamLine3}></span>
				</div>
			</nav>
		</div>
	);
}

export default Navigation;
