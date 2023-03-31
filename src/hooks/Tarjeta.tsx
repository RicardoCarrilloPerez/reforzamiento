import React from 'react'
import { ICharacter } from '../interfaces/IReqRestApiCharacters';

const Tarjeta = (character: ICharacter) => {

    console.log(character);

    return (
        <div className='card m-2 rounded-4 bg-white border border-5 border-success' style={{ width: '19rem' }} >
            <img src={character.image} className='card-img-top rounded-circle' alt={character.name} />
                <div className='card-body border-success'>
                    <p className='card-text text-center text-datk border border-2 border-dark'>
                        {character.name}
                    </p>
                </div>
        </div>
    );
}
export default Tarjeta 