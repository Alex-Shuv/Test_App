import { Link, Route, Routes } from "react-router-dom";
import FavoritesIcon from "./assets/favorites-icon.svg";
import { FavoredUsersPage, UserPage, UsersPage } from "./page";
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
