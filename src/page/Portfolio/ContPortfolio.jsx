import React from "react"
import { Link } from "react-router-dom"

// Import Images
import image1 from "../../Main/image/1667490691_51-sportishka-com-p-gora-pabaku-pinterest-51.jpg"
import image2 from "../../Main/image/6584233333.jpg"

function Portfolio() {
    return (
        <section className="p-1 bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <PortfolioItem to="/portfolio/shop" image={image1} title="Shop" description="Магазин по продажам картин и искусства..." />
                    <PortfolioItem to="/" image={image2} title="Shop" description="Магазин по продажам картин и искусства..." />
                    <PortfolioItem to="/portfolio/shop" image={image1} title="Shop" description="Магазин по продажам картин и искусства..." />
                    <PortfolioItem to="/" image={image2} title="Shop" description="Магазин по продажам картин и искусства..." />
                    <PortfolioItem to="/portfolio/shop" image={image1} title="Shop" description="Магазин по продажам картин и искусства..." />
                    <PortfolioItem to="/" image={image2} title="Shop" description="Магазин по продажам картин и искусства..." />
                    <PortfolioItem to="/portfolio/shop" image={image1} title="Shop" description="Магазин по продажам картин и искусства..." />
                    <PortfolioItem to="/" image={image2} title="Shop" description="Магазин по продажам картин и искусства..." />
                </div>
            </div>
        </section>
    );
}

const PortfolioItem = ({ to, image, title, description }) => (
    <Link to={to} className="flex-none p-5">
        <div className="relative">
            <img className="rounded-lg w-full h-64 object-cover portfolio-image" src={image} alt={title} />
            <div className="text-container absolute bottom-5 left-5 w-full h-full flex flex-col items-start justify-end z-10">
                <h1 className="text-gray-300 text-xl">{title}</h1>
                <p className="mt-2 text-left text-gray-500">{description}</p>
            </div>
        </div>
    </Link>
);

export default Portfolio;