import { useSelector } from 'react-redux';

const ResultadoPokemon = () => {
    const buscador = useSelector(state => state.buscador);
    console.log(buscador);
    return (
        <div>
            <h3 className="text-white">Resultado: </h3>
            {buscador.loading && <div className="spinner-border text-light" role='status'>
                <span className='visually-hidden'>Buscando...</span></div>}
            {buscador.pokemon.length >= 1 &&
                <div className="text-success">
                    <img src={buscador.pokemon[0].sprites.front_default} alt="pokemon" />
                    <span 
                    className='fs-3' 
                    style={{textTransform: 'uppercase', color: 'white'}}
                    >{buscador.pokemon[0].name}</span>
                </div>}
            {buscador.error !== '' && <span className="text-danger">{buscador.error}</span>}
        </div>
    )
}

export default ResultadoPokemon