import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

function CityList({ cities, isLoading }) {
    //  si le telechargement on affiche le component <Spinner/>
    if (isLoading) return <Spinner />;
    if (!cities.length)
        return (
            <Message message="Add your first city by clicking on the city on the map" />
        );
    return (
        <ul className={styles.cityList}>
            {/* on va maper la list des cities */}
            {cities.map((city) => (
                <CityItem city={city} key={city.id} />
            ))}
        </ul>
    );
}

export default CityList;
