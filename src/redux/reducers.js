import {ADD_COMMENT,DELETE_COMMENT,RECRIVE_COMMENT} from './action-types'
// const initComments = [
//   {username: 'Tom' ,content: 'React挺好的' },
//   {username: 'Jack' ,content: 'React太难了'}
// ]
const initComments = []
export function comments(state = initComments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [action.data,...state]
    case DELETE_COMMENT:
      return state.filter((comment ,index) => index !== action.data)
    case RECRIVE_COMMENT:
      return action.data
    default :
      return state
  }
}