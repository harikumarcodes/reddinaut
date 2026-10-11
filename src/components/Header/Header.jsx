import SearchBar from '../SearchBar/SearchBar'

export default function Header({ onSearch, isSearching }) {
  return(
    <header>
      <h1>Reddinaut</h1>
      <SearchBar onSearch={onSearch} isSearching={isSearching} />
    </header>
  )
}
