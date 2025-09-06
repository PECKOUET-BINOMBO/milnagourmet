import '../card.css';

export function Card() {
    return (
        <div className="card my-15 mx-auto">
            <div className="image-container">
                <div className="dessert-image"></div>
            </div>
            <div className="content">
                <h3 className="text-center title">Gourmet crémeux</h3>
            <p className="text-center description">Malicieux, simple, roi aux cerises</p>
            <p className="price w-full text-center">A partir de 450 FCFA</p>
            <button className="button">Découvrir</button>
        </div>
    </div>
    )
}
