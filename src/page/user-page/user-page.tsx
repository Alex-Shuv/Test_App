import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUsersStore } from "../../store/store";
import FavoritesIcon from "../../assets/favorites-icon.svg";
import "./user-page.modules.css";

export const UserPage = () => {
  const { id } = useParams();
  const posts = useUsersStore((state) => state.posts);
  const user = useUsersStore((state) => state.user);
  const getPosts = useUsersStore((state) => state.getPosts);
  const getUser = useUsersStore((state) => state.getUser);

  useEffect(() => {
    getPosts(Number(id));
    getUser(Number(id));
  }, [getPosts, getUser, id]);

  return (
    <div className="posts">
      <div className="posts-item">
        <div className="posts-user-info">
          <p className="posts-user-info-name">{user.name}</p>
          <button>
            <img
              src={FavoritesIcon}
              alt="Избранное"
              className="posts-user-info-avatar"
            />
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
