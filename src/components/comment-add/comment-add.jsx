import React, {Component} from "react";
import PropTypes from 'prop-types'

export default class CommentAdd extends Component {

  static propTypes = {
    addComment: PropTypes.func.isRequired
  }

  state = {
    username: '',
    content: ''
  }

  handleClick = () => {
    //数据
    const comment = this.state
    //更新
    this.props.addComment(comment)
    //清除输入
    this.setState({
      username:'',
      content: ''
    })
  }

  handleNameChange = (event) => {
    const username = event.target.value
    this.setState({username})
  }

  handleContentChange = (event) => {
    const content = event.target.value
    this.setState({content})
  }


  render() {

    const {username,content} = this.state

    return (
      <div>
        <div>
          <input type="text" placeholder="用户名" value={username} onChange={this.handleNameChange}/>
        </div>
        <div>
          <textarea name="content" id="" cols="30" rows="10" value={content} onChange={this.handleContentChange}/>
        </div>
        <div>
          <button onClick={this.handleClick}>提交</button>
        </div>
      </div>
    )
  }
}