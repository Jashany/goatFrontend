import styles from './Signup.module.css';

const Home = () => {
    return ( 
        <div>
            <h1>Home Page</h1>
            <div className={styles.buttons}>
            <button>Login</button>
            <button>Signup</button>
            </div>

        </div>
     );
}
 
export default Home;