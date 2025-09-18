function cards({ name, src, inst, rating, review }) {
    return (
        <div class="card" style={{ width: '18rem' }}>
            <img src={src} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">
                    <ol class="list-group list-group-flush">
                        {inst.map((list) => (

                            <li class="list-group-item">{list}</li>
                        ))}

                    </ol>
                </p>
                <p class="card-text fw-bold">Ratings: {rating}</p>
                <p class="card-text fw-bold">Review: {review}</p>
            </div>
        </div>
    );
}

export default cards;