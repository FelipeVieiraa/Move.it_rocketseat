import styles from "../../styles/components/Profile.module.css";

function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/felipevieiraa.png" alt="Felipe Vieira"/>

            <div>
                <strong>Felipe Vieira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}

export default Profile;