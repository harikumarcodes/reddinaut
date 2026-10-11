import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import PostCardList from './components/PostCardList/PostCardList'

const posts = []

function App() {
  function handleSearch(searchTerm) {
    
  }
  
  return (
    <section>
      <Header onSearch={handleSearch} />
      <Filter />
      <PostCardList posts={posts}/>
    </section>
  )
}

export default App
