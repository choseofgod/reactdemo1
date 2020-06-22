import React, {Component} from "react";
import PropTypes from 'prop-types'

import CommentItem from "../comment-item/comment-item";

export default class CommentList extends Component {

  static propTypes = {
    comments : PropTypes.array.isRequired,
    deleteComment : PropTypes.func.isRequired
  }

  render() {

    const {comments,deleteComment} = this.props
    const display = comments.length === 0 ? 'block' : 'none'

    return (
      <div>
        <h2 style={{display}}>暂无评论,请在左边添加</h2>
        <ul>
          {
            comments.map((comment , index) => <CommentItem key={index} comment={comment} index={index} deleteComment={deleteComment}/>)
          }
        </ul>
      </div>
    )
  }
}
