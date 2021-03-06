import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "../../styles/components/Profile.module.css";

function Profile() {
    
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/felipevieiraa.png" alt="Felipe Vieira"/>

            <div>
                <strong>Felipe Vieira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}

export default Profile;