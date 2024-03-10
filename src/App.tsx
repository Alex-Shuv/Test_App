import { Link, Route, Routes } from "react-router-dom";
import { UsersPage } from "./page/users-page/users-page";
import { UserPage } from "./page/user-page/user-page";
import { FavoredUsersPage } from "./page/favored-users-page/favored-users-page";
import FavoritesIcon from "./assets/favorites-icon.svg";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <Link to="/favorites" className="app-favorite">
        <p className="app-title">Избранное</p>
        <img src={FavoritesIcon} alt="Избранное" />
      </Link>
      <Routes>
        <Route path="/favorites" element={<FavoredUsersPage />} />
        <Route path="/" element={<UsersPage />} />
        <Route path="/:id" element={<UserPage />} />
      </Routes>
    </div>
  );
};
