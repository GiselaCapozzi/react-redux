import { connect, useSelector } from 'react-redux';

const CantidadPokemon = () => {
  const game_shop = useSelector((state) => state.game_shop.pokemon);
  
  return (
    <>
      Unidades: {game_shop}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    game_shop: state.game_shop
  }
}

export default connect(mapStateToProps)(CantidadPokemon);