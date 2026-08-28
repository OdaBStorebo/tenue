import styles from './Navigation.module.css';


export function Navigation() {
    return(
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>Wardrobe</li>
                <li>Outfit</li>
                <li>Create New Item</li>
                <li>Laundry</li>
                <li>Profile</li>
            </ul>
        </nav>
    )
}