function Challenge({ challenge }) {
    return (
        <div>
            <h2>{challenge.name} - {challenge.month}</h2>
            <p>{challenge.description}</p>
        </div>
    );
}

export default Challenge;