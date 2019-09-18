const songs = (state = [], action) => {
    switch (action.type) {
      case 'SET_SONG':
        return [
          ...state,
          {

          }
        ]
      case 'PLAY_SONG':
        return [
            ...state,
            {

            }
        ]
      default:
        return state
    }
  }
  
  export default songs