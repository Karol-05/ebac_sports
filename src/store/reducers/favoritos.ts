import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  items: Produto[]
}

const initialState: FavoritosState = {
  items: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar(state, action: PayloadAction<Produto>) {
      const itemExiste = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (itemExiste) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.items.push(action.payload)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions

export default favoritosSlice.reducer
