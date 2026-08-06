import styles from './WardrobePage.module.css';
import { Header } from '../../components/Header/Header';
import { GarmentCard } from '../../components/GarmentCard/GarmentCard';
import { garments } from '../../data/garments';

export function WardrobePage() {
    return (
        <>
        <Header />
            <div className={styles.flexGrid}>
            {garments.map((garment) => (
                <GarmentCard key={garment.id} garment={garment} />
            ))}
            </div>
        </>
    )
}