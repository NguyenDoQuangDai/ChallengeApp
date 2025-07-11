import Challenge from "./Challenge"

function ChallengeList({ challenges }) {
    return (
        <div>
            <ul>
                {challenges.map(challenge => (
                    <li key={challenge.id}>
                        <Challenge challenge={challenge}></Challenge>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ChallengeList