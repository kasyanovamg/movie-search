const middlewareAddFvorite = (store) => (next) => (action) => {

  if (action.type === 'ADD_TO_FAVORITES') {
    if (localStorage.getItem('favorites') !== action.id) {
      localStorage.setItem('favorites', JSON.parse(localStorage.getItem('favorites')).favorites.favoriteIDs.push(action.id));
    }
  } else if (action.type === 'REMOVE_FROM_FAVORITES') {
    if (localStorage.getItem('favorites') !== action.index) {
      JSON.parse(localStorage.getItem('favorites')).favorites.favoriteIDs.slice(0, action.index)
      JSON.parse(localStorage.getItem('favorites')).favorites.favoriteIDs.slice(action.index + 1)
     
      localStorage.setItem('favorites', JSON.parse(localStorage.getItem('favorites')).favorites.favoriteIDs);
    }
  }
  return next(action);
}

export default middlewareAddFvorite