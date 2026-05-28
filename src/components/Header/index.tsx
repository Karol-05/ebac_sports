import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.items)

  const favoritos = useSelector((state: RootState) => state.favoritos.items)

  return (
    <header>
      <p>{itens.length} itens no carrinho</p>
      <p>{favoritos.length} favoritos</p>
    </header>
  )
}

export default Header
