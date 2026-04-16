import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

interface TemplateCarouselProps {
    templateId: string | undefined
}

export const TemplateCarousel: React.FC<TemplateCarouselProps> = ({ templateId }) => {
    const [index, setIndex] = useState<number>(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    const getImageUrl = (imageIndex: number) => {
        return new URL(`../../assets/images/templates/template-${templateId}-${imageIndex}.png`, import.meta.url).href;
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <a href={getImageUrl(0)} target="_blank" className="item-image-container">
                    <img src={getImageUrl(0)} alt="Tema Claro" />
                </a>
                <Carousel.Caption>
                    <h5>Tema Claro</h5>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <a href={getImageUrl(1)} target="_blank" className="item-image-container">
                    <img src={getImageUrl(1)} alt="Tema Escuro" />
                </a>
                <Carousel.Caption>
                    <h5>Tema Escuro</h5>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <a href={getImageUrl(2)} target="_blank" className="item-image-container">
                    <img src={getImageUrl(2)} alt="Dispositivos Móveis" />
                </a>
                <Carousel.Caption>
                    <h5>Dispositivos Móveis</h5>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <a href={getImageUrl(3)} target="_blank" className="item-image-container">
                    <img src={getImageUrl(3)} alt="Extra" />
                </a>
                <Carousel.Caption>
                    <h5>Extra</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};