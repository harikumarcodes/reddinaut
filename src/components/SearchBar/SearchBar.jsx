import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch, isSearching }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <section className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        className={styles.input}
      />
      <button
        onClick={() => onSearch(searchTerm)}
        disabled={isSearching}
        className={styles.button}
      >
        {isSearching ? 'SEARCHING...' : 'SEARCH'}
      </button>
    </section>
  )
}
