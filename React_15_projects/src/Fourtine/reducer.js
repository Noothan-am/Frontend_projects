const reducer = (state, action) => {
     let { cart, items } = state;

     switch (action.type) {

          case 'set-data':
               return { ...state, cart: action.payload }

          case 'clear-all':
               return ({ ...state, cart: [], items: 0 })

          case 'remove-one':
               return ({
                    ...state,
                    cart: cart.filter((eachState) => { return eachState.id !== action.payload }),
                    items: items - 1
               })

          case 'increase':
               const newCart = cart.map((eachState) => {
                    if (eachState.id === action.payload) {
                         return { ...eachState, amount: eachState.amount + 1 }
                    }
                    return eachState;
               })
               return ({
                    ...state,
                    cart: newCart
               })

          case 'decrease':
               const deleteCart = cart.map((eachState) => {
                    if (eachState.id === action.payload) {
                         return { ...eachState, amount: eachState.amount - 1 }
                    }
                    return eachState;
               })

               return ({
                    ...state,
                    cart: deleteCart.filter((eachState) => { return eachState.amount !== 0 }),
               })

          case 'sum-amount':
               const { amount, total } = cart.reduce((tottal, current) => {
                    const { amount, price } = current;
                    tottal.amount += amount;
                    tottal.total += amount * price;
                    return tottal;
               }, {
                    amount: 0,
                    total: 0
               })
               return { ...state, amount, total: parseFloat(total.toFixed(2)) };

          default: return state;
     }
}

export default reducer