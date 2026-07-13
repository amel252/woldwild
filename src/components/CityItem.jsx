import styles from "./CityItem.module.css";
import "flag-icons/css/flag-icons.min.css";

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));

function CityItem({ city }) {
    const { cityName, country, date } = city;

    const countryCode = {
        Portugal: "pt",
        Spain: "es",
        Germany: "de",
    };

    return (
        <li className={styles.cityItem}>
            <span className={`fi fi-${countryCode[country]}`}></span>

            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>{formatDate(date)}</time>

            <button className={styles.deleteBtn}>&times;</button>
        </li>
    );
}

export default CityItem;
