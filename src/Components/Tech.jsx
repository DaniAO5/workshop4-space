function Tech({name, description, i}) {
    return ( 
        <div key={i} className="tech">
            <h2>{name}</h2>
            <p className="description">{description}</p>
        </div>
    );
}

export default Tech;