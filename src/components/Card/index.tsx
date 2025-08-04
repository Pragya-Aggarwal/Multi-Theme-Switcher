import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

const CardContainer = styled.article`
  background: var(--surface);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3));
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text);
`;

const CardDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
`;

const CardPrice = styled.span`
  font-weight: bold;
  color: var(--primary);
  font-size: 1.25rem;
`;

const CardCategory = styled.span`
  background: var(--background);
  color: var(--text);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  text-transform: capitalize;
`;

const CardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
  
  span {
    color: var(--warning);
  }
`;

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  price, 
  image, 
  category,
  rating 
}) => {
  return (
    <CardContainer className="slide-in">
      <CardImage imageUrl={image} />
      <CardContent>
        <CardCategory>{category}</CardCategory>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardRating>
          <span>★</span>
          {rating.rate} ({rating.count} reviews)
        </CardRating>
        <CardFooter>
          <CardPrice>${price.toFixed(2)}</CardPrice>
          <button>Add to Cart</button>
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
