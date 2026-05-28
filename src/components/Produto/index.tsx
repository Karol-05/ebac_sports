import { useDispatch } from 'react-redux'

import { adicionar } from '../../store/reducers/carrinho'

type Props = {
  produto: any
  estaNosFavoritos: boolean
  favoritar: (produto: any) => void
  aoComprar: (produto: any) => void
}

const Produto = ({
  produto,
  estaNosFavoritos,
  favoritar,
  aoComprar
}: Props) => {
  const dispatch = useDispatch()

  return (
    <div>
      <h3>{produto.nome}</h3>

      <button onClick={() => favoritar(produto)}>Favoritar</button>

      <button
        onClick={() => {
          dispatch(adicionar(produto))

          aoComprar(produto)
        }}
      >
        Comprar
      </button>
    </div>
  )
}

export default Produto
