import { useSelector } from 'react-redux'

import { RootState } from '../../store'

const Header = () => {
  const itens = useSelector(
    (state: RootState) => state.carrinho.itens
  )

  return (
    <header>
      <h1>EBAC Sports</h1>

      <p>{itens.length} itens no carrinho</p>
    </header>
  )
}

export default Header