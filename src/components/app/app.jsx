import React, {Component} from "react";
import './app.css'

import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";

export default class App extends Component {

  state = {
    comments : [
      {username : 'Tom' , content: 'React挺好的'},
      {username : 'Jack' , content: 'React太难了'}
    ]
  }

  addComment = (comment) => {
    const {comments} = this.state
    comments.unshift(comment)
    //更新
    this.setState({comments})
  }

  deleteComment = (index) => {
    const {comments} = this.state
    comments.splice(index, 1)
    //更新
    this.setState({comments})
  }

  render() {

    const {comments} = this.state

    return (
      <div>
        <header>
          <div>请发表对React的评论</div>
        </header>
        <div className='head'>
          <div className='left'>
            <CommentAdd addComment={this.addComment}/>
          </div>
          <div className="right">
            <CommentList comments={comments} deleteComment={this.deleteComment}/>
          </div>
        </div>
      </div>
    )
  }
}