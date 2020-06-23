import React, {Component} from "react";
import './app.css'
import {connect} from 'react-redux'

import CommentAdd from "../../components/comment-add/comment-add";
import CommentList from "../../components/comment-list/comment-list";
import PropTypes from 'prop-types'
import {addComment, deleteComment,getComments} from '../../redux/actions'

class App extends Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired
  }

  componentDidMount() {
    //模拟发送ajax请求 获取数据
    // setTimeout( () => {
    //   const comments = [
    //     {username: 'Tom' ,content: 'React挺好的' },
    //     {username: 'Jack' ,content: 'React太难了'}
    //   ]
    //
    //   this.setState({comments})
    // },1000)
    this.props.getComments()
  }

  // addComment = (comment) => {
  //   const {comments} = this.state
  //   comments.unshift(comment)
  //   //更新
  //   this.setState({comments})
  // }

  // deleteComment = (index) => {
  //   const {comments} = this.state
  //   comments.splice(index, 1)
  //   //更新
  //   this.setState({comments})
  // }

  render() {

    const {comments,deleteComment,addComment} = this.props

    return (
      <div>
        <header>
          <div>请发表对React的评论</div>
        </header>
        <div className='head'>
          <div className='left'>
            <CommentAdd addComment={addComment}/>
          </div>
          <div className="right">
            <CommentList comments={comments} deleteComment={deleteComment}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({comments: state}),
  {addComment,deleteComment,getComments}
)(App)


