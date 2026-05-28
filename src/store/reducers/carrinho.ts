import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  items: Produto[]
}

const initialState: CarrinhoState = {
  items: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar(state, action: PayloadAction<Produto>) {
      const itemExiste = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!itemExiste) {
        state.items.push(action.payload)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions

export default carrinhoSlice.reducer
