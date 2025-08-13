function Challenge({ challenge, onChallengeDeleted }) {
    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (window.confirm(`Are you sure about deleting "${challenge.name}"?`)) {
            onChallengeDeleted(challenge.id);
        }
    };

    return (
        <a href="#" className="list-group-item list-group-item-action" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{challenge.name}</h5>
                <div className="d-flex align-items-center">
                    <small className="me-2">{challenge.month}</small>
                    <button 
                        type="button" 
                        className="btn-close" 
                        aria-label="Close"
                        onClick={handleDelete}
                        title="Delete challenge"
                    ></button>
                </div>
            </div>
            <p className="mb-1">{challenge.description}</p>
        </a>
    );
}

export default Challenge;