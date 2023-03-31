import Tarjeta from './Tarjeta';
import useCharacter from './useCharacter';

const Personajes = () => {

    const {characters, next, before, inicio, fin, currentPage } = useCharacter();

    console.log(characters);

    return (
        <>
        <div className='row bg-dark'>
            {
                characters.map(character => <div className='col-sm-3'>
                        <Tarjeta key={character.id} {...character} /> </div>
                    )
            }
        </div>
        <div>
          {currentPage.current === 1 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <button className='btn btn-success' onClick={() => inicio()}>Inicio</button>

              <button className='btn btn-info m-2' onClick={() => next()}>Siguiente</button>

              <button className='btn btn-danger' onClick={() => fin()}>Fin</button>

            </div>
          ) : currentPage.current >= 2 && currentPage.current <= 41 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <button className='btn btn-success' onClick={() => inicio()}>Inicio</button>

              <button className='btn btn-warning m-2' onClick={() => before()}>Anterior</button>

              <button className='btn btn-info' onClick={() => next()}>Siguiente</button>

              <button className='btn btn-danger m-2' onClick={() => fin()}>Fin</button>

            </div>
          ) : currentPage.current === 42 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <button className='btn btn-outline-primary text-dark text-center' onClick={() => inicio()}>Inicio</button>

              <button className='btn btn-outline-danger text-dark m-2 text-center' onClick={() => before()}>Anterior</button>

              <button className='btn btn-danger' onClick={() => fin()}>Fin</button>
              
            </div>
          ) : null}
        </div>
        </>
    );
}
export default Personajes