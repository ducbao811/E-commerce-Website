export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type){
    case 'ADD_TO_BASKET': {
      // console.log(state.basket)
      const index = state.basket.findIndex(e => e.id === action.item.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket[index].count += action.item.count;
      } else {
        let newItem = action.item;
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
    case 'REMOVE_ALL':
      {
        let newBasket = [];
        return {
          ...state,
          basket: newBasket
        };
      }
    case 'REMOVE_ONE_FROM_BASKET':
    {
      const index = state.basket.findIndex(e => e.id === action.id);
      let newBasket = [...state.basket];
        if (index >= 0) {
          if (newBasket[index].count === 1) {
            newBasket = newBasket.filter(item => item.id !== action.id);
          }
          else {
            newBasket[index].count -= 1;
          }
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