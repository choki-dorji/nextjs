import { createSlice } from "@reduxjs/toolkit";
interface ShopItem {
  id: number;
  task: string;
  description: string;
  completed: boolean;
  // Add other properties as needed
}

// Define the type for the initial state of your reducer
interface InitialState {
  shop: ShopItem[];
  loading: boolean;
}

const initialState: InitialState = {
  shop: [],
  loading: false,
};

const Reducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.loading = true;
      state.shop.push(action.payload);
      state.loading = false;
    },
    markComplete: (state, action) => {
      state.loading = true;

      const items = state.shop.find((task) => task.id === action.payload.id);

      if (items) {
        items.completed = true;
      }
      state.loading = false;
    },
    searchItem: (state, action) => {
      state.loading = true;
      //   console.log("payload", action.payload);
      const searchQuery = action.payload.toLowerCase().trim();
      //   console.log("searchQuery", initialState);
      const filteredShop = state.shop.filter(
        (item) =>
          item.task.toLowerCase().includes(searchQuery) ||
          item.description.toLowerCase().includes(searchQuery)
      );

      state.shop = filteredShop;
      state.loading = false;
    },
    deleteItems: (state, action) => {
      state.loading = true;
      const index = state.shop.findIndex(
        (task) => task.id === action.payload.id
      );
      state.shop.splice(index, 1);
      state.loading = false;
    },
  },
});

export const { addItem, markComplete, searchItem, deleteItems } =
  Reducer.actions;
export default Reducer.reducer;
