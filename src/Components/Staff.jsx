function Staff({name, job, description, i}) {
    return ( 
        <div key={i} className="staff">
            <p className="job">{job}</p>
            <h2>{name}</h2>
            <p className="description">{description}</p>
        </div>
    );
}

export default Staff;