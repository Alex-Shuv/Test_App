import { Link } from "react-router-dom";
import { useUsersStore } from "../../store/store";
import "./favored-users-page.modules.css";

export const FavoredUsersPage = () => {
  const favoriteUsers = useUsersStore((state) => state.favoriteUsers);

  return (
    <>
      {favoriteUsers.length > 0 ? (
        <div className="favored-user-cards">
          {favoriteUsers.map((user) => (
            <Link to={`/${user.id}`} key={user.id} className="user-card">
              <p className="favored-user-name">{user.name}</p>
              <p className="favored-user-second-name">{user.username}</p>
              <p className="favored-user-email">{user.email}</p>
              <p className="favored-user-phone">{user.phone}</p>
              <p className="favored-user-website">{user.website}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="not-favored-users">
          Вы пока никого не добавили в избранное 😭
        </p>
      )}
    </>
  );
};
