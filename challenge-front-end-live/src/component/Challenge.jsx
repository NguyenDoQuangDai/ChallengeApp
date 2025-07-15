function Challenge({ challenge }) {
    return (
        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{challenge.name}</h5>
            <small>{challenge.month}</small>
            </div>
            <p class="mb-1">{challenge.description}</p>
        </a>
    );
}

export default Challenge;