import React from 'react';

export default function Recipe({ title, calories, image, ingredients }) {
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt=""/>
        </div>
    );
}