import React, { Component } from "react";
import User from "../user";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "user1", lastname: "last1" },
        { id: 2, name: "user2", lastname: "last2" },
        { id: 3, name: "user3", lastname: "last3" },
        { id: 4, name: "user4", lastname: "last4" },
        { id: 5, name: "user5", lastname: "last5" },
      ],
    };
  }
  deleteUserFromList = (idUser) => {
    const newUsersList = this.state.users.filter((user) => idUser !== user.id);
    this.setState({ users: newUsersList });
  };

  render() {
    const { users } = this.state;
    const userlist = users.map((users) => (
      <li key={users.id}>
        <User
          username={users.name}
          lastname={users.lastname}
          id={users.id}
          deleteUserList={this.deleteUserFromList}
        />
      </li>
    ));

    return <ul>{userlist}</ul>;
  }
}

export default UserList;
