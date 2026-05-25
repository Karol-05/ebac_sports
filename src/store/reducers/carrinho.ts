import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Item = {
  id: number
  nome: string
}

type CarrinhoState = {
  itens: Item[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',

  initialState,

  reducers: {
    adicionar: (state, action: PayloadAction<Item>) => {
      state.itens.push(action.payload)
    }
  }
})

export const { adicionar } = carrinhoSlice.actions

export default carrinhoSlice.reducer