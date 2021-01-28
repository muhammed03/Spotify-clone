import React from 'react'
import Playlists from '../Playlists'

const Categories = () => {

    const dataCategories = [
        {
            id: 1,
            name: 'Recommended stations',
            tagline: 'An endless selection of your favorite tracks and artists.',
        },
        {
            id: 2,
            name: 'Mood',
            tagline: 'Playlists to match your mood',
        },
        {
            id: 3,
            name: 'Pop',
            tagline: 'Special for you',
        },
        {
            id: 4,
            name: 'Good morning',
        },
    ]

    return (
        <div className="mainInner">
            {dataCategories.map((category) => (
                <div className="cardsWrap">
                    <h2>{category.name}</h2>
                    <p className="subText">{category.tagline}</p>
                    <Playlists category_id={category.id}  />
                </div>
            ))}
        </div>
    )
}

export default Categories