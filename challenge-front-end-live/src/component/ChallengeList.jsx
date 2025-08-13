import Challenge from "./Challenge"

function ChallengeList({ challenges, onChallengeDeleted }) {
    return (
        <div className="list-group">
                {challenges.map(challenge => (
                    <Challenge key={challenge.id} challenge={challenge} onChallengeDeleted={onChallengeDeleted}></Challenge>
                ))}
        </div>
    )
}

export default ChallengeList