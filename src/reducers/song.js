const initialState = {
  song: false,
}

const songs = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SONG':
        return {
            song: action.song,
        }
      case 'CLEAR_SONG':
        return {
          song: false,
        }
      default:
        return state
    }
  }
  
  export default songs