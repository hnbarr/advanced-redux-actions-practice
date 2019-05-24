import { combineReducers } from 'redux'

const currentCount = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return state + 1
    case 'DECREASE_COUNTER':
      return state - 1
    case default:
      return state
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.value]
    case 'REMOVE_USER':
      state.slice(1)
    case default:
      return state
  }
}

const specialText = (state = "", action) => {
  switch (action.type) {
    case 'SET_SPECIAL_TEXT':
      return action.value
    case default:
      return state
  }
}

const currentCity = (state = "", action) => {
  switch (action.type) {
    case 'SET_CURRENT_CITY':
      return action.value
    case default: 
      return state
  }
}

const currentTemp = (state = 0, action) => {
  switch (action.type) {
    case 'SET_TEMP':
      return state.value
    default:
      return state
  }
}

const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'SET-IS-LOADING':
      return action.value 
    default: 
      return state
  }
}

const videoURL = (state = '', action) => {
  switch (action.type) {
    case 'SET-VIDEO-URL':
      return action.value
    default:
      return state
  }
}

const searchText = (state = '', action) => {
  switch(action.type) {
    case 'SET-SEARCH-TEXT':
      return action.value
    default: 
      return state
  }
}

const currentUserSort = (state = 'first_name', action) => {
  switch(action.type) {
    case 'SET-CURRENT-USER-SORT':
      return action.value
    default: 
      return state
  }
}

const videoScale = (state = 1, action) => {
  switch(action.type){
    case 'SET-VIDEO-SCALE':
      return action.value
    default: 
      return state
  }
}

export default combineReducers({
  currentCount,
  specialText,
  users,
  currentCity,
  currentTemp,
  isLoading,
  videoURL,
  searchText,
  currentUserSort,
  videoScale
});