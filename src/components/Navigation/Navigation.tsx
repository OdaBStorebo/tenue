import styles from './Navigation.module.css';
import hangerIcon from '../../assets/icons/hanger.svg';
import outfitIcon from '../../assets/icons/outfit.svg';
import laundryIcon from '../../assets/icons/laundry-basket.svg';
import profileIcon from '../../assets/icons/profile.svg';


export function Navigation() {
    return(
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li><img src={hangerIcon} alt="Hanger" className={styles.icon}/>Wardrobe</li>
                <li><img src={outfitIcon} alt="Outfit" className={styles.icon}/>Outfit</li>
                <li><button className={styles.addButton}>+</button></li>
                <li><img src={laundryIcon} alt="Laundry" className={styles.icon}/>Laundry</li>
                <li><img src={profileIcon} alt="Profile" className={styles.icon}/>Profile</li>
            </ul>
        </nav>
    )
}