import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

import { RootState } from './store'

import { carregar } from './store/reducers/produtos'
import { adicionar } from './store/reducers/carrinho'
import { favoritar } from './store/reducers/favoritos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()

  const produtos = useSelector((state: RootState) => state.produtos.items)

  const carrinho = useSelector((state: RootState) => state.carrinho.items)

  const favoritos = useSelector((state: RootState) => state.favoritos.items)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => dispatch(carregar(res)))
  }, [dispatch])

  function adicionarAoCarrinho(produto: Produto) {
    dispatch(adicionar(produto))
  }

  function adicionarFavorito(produto: Produto) {
    dispatch(favoritar(produto))
  }

  return (
    <>
      <GlobalStyle />

      <div className="container">
        <Header />

        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={adicionarFavorito}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
