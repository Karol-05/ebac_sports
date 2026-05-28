import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type ProdutosState = {
  items: Produto[]
}

const initialState: ProdutosState = {
  items: []
}

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    carregar(state, action: PayloadAction<Produto[]>) {
      state.items = action.payload
    }
  }
})

export const { carregar } = produtosSlice.actions

export default produtosSlice.reducer
