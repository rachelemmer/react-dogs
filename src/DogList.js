import React from 'react'
import DogCard from './DogCard'

const DogList = (props) => {

    return (
        props.dogs.map(dog => {
            return <DogCard name={dog.name} />
        })
    )
}

export default DogList;