import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUsersStore } from "../../store/store";
import FavoritesIcon from "../../assets/favorites-icon.svg";
import FavoritesIconActive from "../../assets/favorites-icon-active.svg";
import "./user-page.modules.css";

export const UserPage = () => {
  const { id } = useParams();
  const posts = useUsersStore((state) => state.posts);
  const user = useUsersStore((state) => state.user);
  const getPosts = useUsersStore((state) => state.getPosts);
  const getUser = useUsersStore((state) => state.getUser);
  const toggleFavoriteUser = useUsersStore((state) => state.toggleFavoriteUser);
  console.log(user);

  useEffect(() => {
    getPosts(Number(id));
    getUser(Number(id));
  }, [getPosts, getUser, id]);

  return (
    <div className="posts">
      <div className="posts-item">
        <div className="posts-user-info">
          <p className="posts-user-info-name">{user.name}</p>
          <button onClick={() => toggleFavoriteUser(Number(id))}>
            {user.isFavorite ? (
              <img src={FavoritesIconActive} alt="Избранное" />
            ) : (
              <img src={FavoritesIcon} alt="Избранное" />
            )}
          </button>
        </div>
        <p className="posts-user-info-title">Posts</p>
      </div>
      <ul className="posts-list">
        {posts.map((post) => (
          <li className="posts-list-item" key={post.id}>
            <p className="posts-list-item-title">{post.title}</p>
            <p className="posts-list-item-body">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
