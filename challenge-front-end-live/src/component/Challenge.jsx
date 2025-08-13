import DeleteChallenge from "./DeleteChallenge";

function Challenge({ challenge, onChallengeDeleted }) {
    return (
        <a href="#" className="list-group-item list-group-item-action" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{challenge.name}</h5>
                <div className="d-flex align-items-center">
                    <small className="me-2">{challenge.month}</small>
                    <DeleteChallenge challenge={challenge} onChallengeDeleted={onChallengeDeleted} />
                </div>
            </div>
            <p className="mb-1">{challenge.description}</p>
        </a>
    );
}

export default Challenge;