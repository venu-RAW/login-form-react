import React from "react";
import styles from "./Footer.module.css";

function Footer() {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.copyright}>
				Copyright 2020, All rights reserved.
			</div>
		</div>
	);
}

export default Footer;
