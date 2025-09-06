import { useState } from 'react';
import '../slide-menu.css';

const products = [
    { title: 'Nature', price: '450 XOF', image: 'nature' },
    { title: 'Simple', price: '600 XOF', image: 'simple' },
    { title: 'Aux céréales', price: '1000 XOF', image: 'cereales' },
];

const CARDS_PER_SLIDE = 3;

export function SlideMenuCremeux() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Math.ceil(products.length / CARDS_PER_SLIDE);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };
    const handleNext = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const startIdx = currentSlide * CARDS_PER_SLIDE;
    const visibleProducts = products.slice(startIdx, startIdx + CARDS_PER_SLIDE);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Menu détaillé</h1>
            <p className="text-center text-gray-500 font-medium">Tous nos produits avec leurs prix</p>
            <div className="carousel-container">
                <div className="header">
                    <div className="header-icon"></div>
                    <h2 className="header-title">Gourmet crémeux</h2>
                </div>
                <div className="carousel-wrapper">
                    <button className="nav-button prev" onClick={handlePrev}></button>
                    <div className="carousel-track">
                        {visibleProducts.map((product, idx) => (
                            <div className="card" key={product.title + idx}>
                                <div className={`card-image ${product.image}`}></div>
                                <div className="card-content">
                                    <h3 className="card-title">{product.title}</h3>
                                    <p className="card-price">{product.price}</p>
                                    <button className="card-button">Ajouter</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="nav-button next" onClick={handleNext}></button>
                </div>
            </div>
        </div>
    );
}