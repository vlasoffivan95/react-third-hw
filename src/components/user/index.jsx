import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      isLikes: false
    };
  }

  bindLike = () => {
    this.setState({
     likes:this.state.likes+1,
     isLikes: !this.state.isLikes
    });
  };
  
  render() {
    const { username, lastname } = this.props;
    return (
        
      <div>
        <p>
          {username} {lastname}
        </p>
        <p>likes: {this.state.likes}</p>
        <button disabled = {this.state.isLikes}onClick={this.bindLike}>{this.state.likes===0 ? 'Like' : 'You already liked'}</button>
      </div>
    );
  }
}

export default User;
