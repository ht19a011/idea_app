import { Link } from "react-router-dom";

export function Pagination2({ path, page, perPage, count }) {
  return (
    <nav className="pagination">
      

        
      <Link
        className="pagination-next"
        to={`${path}?page=${page + 1}`}
        disabled={perPage * page >= count}
      >
        次の{perPage}件
      </Link>
    </nav>
    
  );
}
