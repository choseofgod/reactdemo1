import {ADD_COMMENT, DELETE_COMMENT,RECRIVE_COMMENT} from "./action-types";

export const addComment = (comment) => ({type:ADD_COMMENT ,data: comment})

export const deleteComment = (index) => ({type:DELETE_COMMENT, data: index})

//接受comments
const recriveComments = (comments) => ({type:RECRIVE_COMMENT,data: comments})
//异步获取后台
export const getComments = () => {
  return dispatch => {
    setTimeout(() => {
      const comments = [
        {username: 'Tom' ,content: 'React挺好的' },
        {username: 'Jack' ,content: 'React太难了'}
      ]
      //分发一个同步action
      dispatch(recriveComments(comments))
    },1000)
  }
}