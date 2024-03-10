import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUsersStore } from "../../store/store";
import ArrowPagination from "../../assets/arrow-pagination.svg";
import "./users-page.modules.css";

export const UsersPage = () => {
  const getUsersList = useUsersStore((state) => state.getUsersList);
  const users = useUsersStore((state) => state.users);
  const [page, setPage] = useState(0);

  const handlePagination = (page: number, operation: string) => {
    if (operation === "prev" && page) {
      setPage((prev) => prev - 1);
    }
    if (operation === "next" && page < 10) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    getUsersList(page);
  }, [getUsersList, page]);

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
          onClick={() => handlePagination(page, "prev")}
          className="user-pagination-prev"
        >
          <img src={ArrowPagination} alt="Кнопка пагинации назад" />
        </button>
        <p className="user-pagination-page-count">{page + 1}</p>
        <button
          onClick={() => handlePagination(page, "next")}
          className="user-pagination-next"
        >
          <img src={ArrowPagination} alt="Кнопка пагинации вперед" />
        </button>
      </div>
    </>
  );
};
