import React from "react";
import PropTypes from "prop-types";
import style from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.list}>
      {friends.map((e) => {
        return (
          <li key={e.id} className={style.item}>
            <span className={e.isOnline ? style.green : style.red}></span>
            <img src={e.avatar} alt={e.name} width="48" />
            <p>{e.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
