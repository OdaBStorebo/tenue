import type { Garment } from "../../types/garment";
import wornIcon from '../../assets/icons/worn.svg';
import laundryIcon from '../../assets/icons/laundry.svg';
import styles from './GarmentCard.module.css';

type GarmentCardProps = {
    garment: Garment;
};

export function GarmentCard({garment}: GarmentCardProps) {
    return (
        <div className={styles.garmentCard}>
            <img src={garment.imageUrl} alt={garment.name} className={styles.garmentImage} />

                {garment.laundryStatus==="worn" && (
                    <span className={`${styles.garmentLaundryStatus} ${styles.worn}`}>
                        <img src={wornIcon} alt="Worn icon" className={styles.statusIconImg} />
                    </span>)}

                {garment.laundryStatus==="laundry" && (
                    <span className={`${styles.garmentLaundryStatus} ${styles.laundry}`}>
                        <img src={laundryIcon} alt="Laundry icon" className={styles.statusIconImg} />
                    </span>
                )}
        </div>
    )
}