import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { favoritedLike } from '../store/article/favoritedLike/favoritedLikeAction';
import PropTypes from 'prop-types';
import './PostItem.css';

const PostItem = ({
  title,
  createdAt,
  favoritesCount,
  userName,
  avatar,
  slug,
  description,
  tagList,
  favorited,
}) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const formatCreatedAt = format(new Date(createdAt), 'MMMM d, yyyy');
  const handleFavorite = () => {
    dispatch(favoritedLike({ slug, favorited }));
  };
  return (
    <li className="post-item">
      <div className="post-item-info">
        <div className="title-likes-info">
          <Link className="title-text" to={`/articles/${slug}`}>
            {title}
          </Link>
          <button
            className="likes-button"
            onClick={handleFavorite}
            disabled={!currentUser}
          >
            {favorited ? (
              <img src="/Heart_like.svg" alt="" />
            ) : (
              <img src="/heart1.svg" alt="" />
            )}
            {favoritesCount}
          </button>
        </div>
        <ul className="tags-list-info">
          {tagList.map((tag, index) => (
            <li key={index} className="tag-item">
              {tag}
            </li>
          ))}
        </ul>
        <div className="post-item-text-info">{description}</div>
      </div>
      <div className="post-item__user-info">
        <div className="user-name-data-create-post-item">
          <div className="user-name">{userName}</div>
          <div className="data-create-post-item">{formatCreatedAt} </div>
        </div>
        <div className="user-avatar">
          <img src={avatar} alt="Фото Пользователя" />
        </div>
      </div>
    </li>
  );
};

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  favoritesCount: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tagList: PropTypes.arrayOf(PropTypes.string).isRequired,
  favorited: PropTypes.bool.isRequired,
};

export default PostItem;
