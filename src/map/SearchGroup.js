import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchGroup() {
  return (
    <div className="search-bar">
      <input type="text" id="search" className="search-input" />
      <a
        href="#/"
        className="search-btn"
        onClick={() => {
          console.log('search click');
        }}
      >
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </a>
    </div>
  );
}
export default SearchGroup;
