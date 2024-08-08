import {Link, Outlet} from "react-router-dom";
import styles from '../styles/Admin.module.css';

const Admin = () => {
	return (
		<>
			<div className={styles.contain}>
				<div className={styles.sidebar}>
					<div className={`${styles.product} ${styles['sidebar-element']}`}>
						<Link to={'/admin'}>Product</Link>
					</div>
					<div className={`${styles.users} ${styles['sidebar-element']}`}>
						<Link to={'/admin/users'}>Users</Link>
					</div>
					<div className={`${styles.student} ${styles['sidebar-element']}`}>
						<Link to={'/admin/students'}>Student</Link>
					</div>
				</div>
				<div className={styles.main}>
					<div className={styles.menu}>Menu Admin</div>
					<div className={styles.content}>
						<Outlet/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Admin;