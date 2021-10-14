export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type){
    case 'ADD_TO_BASKET': {
      const index = state.basket.findIndex(e => e.id === action.item.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket[index].count += 1;
      } else {
        let newItem = action.item;
        newItem.count = 1;
        newBasket.push(newItem)
      }
      return {
        ...state,
        basket: newBasket
      };
    }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.id)
      };
    case 'REMOVE_ONE_FROM_BASKET':
    {
      const index = state.basket.findIndex(e => e.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket[index].count -= 1;
      } else {
        console.log("There is no item with this id")
      }
      return {
        ...state,
        basket: newBasket
      };
    }
  }
}

export function getBasketTotal(basket) {
  return basket?.reduce((accumulator, current) => accumulator + current.price * current.count, 0);
}

export default reducer;