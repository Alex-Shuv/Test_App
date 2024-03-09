import { useEffect, useState } from "react";
import { useUsersStore } from "../../store/store";
import "./users-page.modules.css";
import { Link } from "react-router-dom";
import ArrowPagination from "../../assets/arrow-pagination.svg";

export const UsersPage = () => {
  const getUsersList = useUsersStore((state) => state.getUsersList);
  const users = useUsersStore((state) => state.users);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getUsersList();
  }, [getUsersList]);

  const handlePaginationNext = (page: number) => {
    setPage(page + 1);
  };

  const handlePaginationPrev = (page: number) => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <div className="user-cards">
        {users.map((user) => (
          <Link to={`/${user.id}`} key={user.id} className="user-card">
            <p className="user-name">{user.name}</p>
            <p className="user-second-name">{user.username}</p>
            <p className="user-email">{user.email}</p>
            <p className="user-phone">{user.phone}</p>
            <p className="user-website">{user.website}</p>
          </Link>
        ))}
      </div>
      <div className="user-pagination">
        <button
          onClick={() => handlePaginationPrev(page)}
          className="user-pagination-prev"
        >
          <img src={ArrowPagination} alt="Кнопка пагинации назад" />
        </button>
        <p className="user-pagination-page-count">{page}</p>
        <button
          onClick={() => handlePaginationNext(page)}
          className="user-pagination-next"
        >
          <img src={ArrowPagination} alt="Кнопка пагинации вперед" />
        </button>
      </div>
    </>
  );
};
