// Sidebar.js
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../Slices/authslice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth);

    return ( 
        <div className={styles.sidebar}>
            <div className={styles.userDetails}>
                <h2>Goat Mitra</h2>
                <p>Name: {userInfo.name}</p>
                <p>Email: {userInfo.email}</p>
                <p>Area: {userInfo.area}</p>
                <p>Phone Number: {userInfo.phoneNumber}</p>
            </div>
            <Link to="/dashboard" className={styles.navLink}>Dashboard</Link>
            <Link to="/goatPalak" className={styles.navLink}>Goat Palak</Link>
            <div className={styles.logout}>
                <button onClick={()=>{
                    dispatch(logout());
                }}>Logout</button>
            </div>
        </div>
    );
}
 
export default Sidebar;
