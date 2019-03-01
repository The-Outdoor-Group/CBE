import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { fetchUsers } from './../actions/users';

class AppOld extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    // console.log('this.props: ', this.props);

    const { users } = this.props;

    const userNodes = () => users.map( user => <p key={user.id}>{user.owner.login}</p>)

    return (
      <div>
        <Helmet>
          <title>Users</title>
        </Helmet>
        { this.props.users.length > 0 ? userNodes() : <h1>No users</h1>}
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users });
export default connect(mapStateToProps, { fetchUsers })(AppOld);
