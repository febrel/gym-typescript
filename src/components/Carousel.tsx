import React, { useState } from "react";

// 1. Define la forma de cada tarjeta
export interface CarouselItem {
  title: string;
  description: string;
  price: number;
}

// 2. Define las props del componente
interface CarouselProps {
  items: CarouselItem[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (!items || items.length === 0) {
    return null;
  }

  const nextSlide = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Calculo del progreso
  const progressPercentage = ((currentIndex + 1) / items.length) * 100;

  return (
    <div className="carousel-wrapper">
      <div className="container-buttons-arrow">
        <div className="buttons-izq">
          {/* Barra de Progreso */}
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="buttons-der">
          <button
            className="carousel-btn prev-btn"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Tarjeta anterior"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          {/* Flecha Derecha */}
          <button
            className="carousel-btn next-btn"
            onClick={nextSlide}
            disabled={currentIndex === items.length - 1}
            aria-label="Siguiente tarjeta"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
      {/* Flecha Izquierda */}

      <div className="carousel-container">
        {/* Pista de tarjetas */}
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-card">
              <div className="card-content">
                <h3>{item.title}</h3>
                <div className="circulo">
                  <p className="circulo-text">
                    ${item.price}/<span>month</span>
                  </p>
                </div>
                <p className="content-descr">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
