function Planet({name, description, distance, travel_time, i}) {
    return ( 
        <div className='planet' key={i}>
            <h2>{name}</h2>
            <p className="description">{description}</p>
            <div className="line"></div>
            <footer>
                <div>
                    <p className="title2">AVG. DISTANCE</p>
                    <p className="distance">{distance}</p>
                </div>
                <div>
                    <p className="title2">AVG. TRAVEL TIME</p>
                    <p className="travel-time">{travel_time}</p>
                </div>
            </footer>
        </div>
     );
}

export default Planet;