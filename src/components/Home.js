import {Link, Outlet} from "react-router-dom";
import styles from "../styles/Home.module.css";

const Home = () => {
	return (
		<>
			<div className={styles.header}>
				<div className={styles.logo}>
					Logo
				</div>
				<div className={styles.banner}>
					Banner
				</div>
			</div>
			<div className={styles.menu}>
				<div className={styles['menu-left']}>
					<div className={`${styles.home} ${styles['menu-item']}`}>
						<Link to={'/home'}>Home</Link>
					</div>
					<div className={`${styles.product} ${styles['menu-item']}`}>
						<Link to={'/home'}>Product</Link>
					</div>
				</div>
				<div className={styles['menu-right']}>
					<div className={`${styles.orders} ${styles['menu-item']}`}>
						<Link to={'/home/orders'}>Orders</Link>
					</div>
					<div className={`${styles.logout} ${styles['menu-item']}`}>
						<Link to={'/'}>Logout</Link>
					</div>
				</div>
			</div>
			<div className={styles.main}>
				<div className={styles.sidebar}>Sidebar</div>
				<div className={styles.content}>
					<Outlet/>
				</div>
			</div>
		</>
	)
}

export default Home;