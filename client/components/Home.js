import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

let Home = ({ user }) => {
    return (
      <div>
        <h1>Home</h1>
        { user ?
          <p>Usuario: {user.username}</p> :
          <p>Nenhum usuario loggado.</p>
        }
      </div>
    )
}

Home = withTracker(() => {
  return {
    user: Meteor.user()
  }
})(Home)
export default Home
