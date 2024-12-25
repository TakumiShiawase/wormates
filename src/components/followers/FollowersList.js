import React from 'react';
import useFollowers from '../../hooks/useFollowers';
import styles from './Followers.module.scss';

const FollowersList = () => {
  const followers = useFollowers();

  if (!followers || followers.length === 0) {
    return <p>Загрузка...</p>;
  }

  return (
    <ul>
      {followers.map((follower) => (
        <li className={styles.container} key={follower.id}>
          <img className={styles.avatar} src={follower.profile_img} alt={follower.first_name} />
          <div className={styles.name}>
            {follower.first_name} {follower.last_name}
          </div>
        </li>
      ))}
    </ul>
  );
};
export default FollowersList;
