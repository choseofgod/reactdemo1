import React, {Component} from "react";
import PropTypes from "prop-types";

import './commentItem.css'

export default class CommentItem extends Component {

  static propTypes = {
    comment : PropTypes.object.isRequired,
    index : PropTypes.number.isRequired,
    deleteComment: PropTypes.func.isRequired
  }

  handleClick = () => {
    const {comment,deleteComment,index} = this.props
    if(window.confirm(`确定要删除${comment.username}的评论?`)){
      deleteComment(index)
    }

  }

  render() {

    const {comment} = this.props



    return (
      <li>
        <div>
          <a href="/#" onClick={this.handleClick}>删除</a>
        </div>
        <p><span>{comment.username}</span></p>
        <p><span>{comment.content}</span></p>
      </li>
    )
  }
}