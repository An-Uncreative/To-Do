export default function SearchItem({ search, setSearch }) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searchItem">Search</label>
      <input
        type="text"
        id="searchItem"
        placeholder="Search Items"
        aria-label="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
