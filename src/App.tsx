import React from 'react'
import PostList from './components/PostList'
import TodoList from './components/TodoList'
import UserList from './components/UserList'
import PhotoList from './components/PhotoList'

const App = () => {
  return (
    <div>
      <hr />
      <UserList />
      <hr />
      <hr />
      <TodoList />
      <hr />
      <hr />
      <PostList />
      <hr />
      <hr />
      <PhotoList />
    </div>
  )
}

export default App
