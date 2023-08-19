import React from 'react';
import styles from './styles/InfoGenre.module.css';

const InfoGenre = ({ genres, selectedGenres, onGenreChange }) => {
  return (
    <div className={styles.info_genre}>
      <span>장르</span>
      <div className={styles.info_genre_checkbox}>
        {genres.map(genre => (
          <label key={genre.value}>
            <input
              type="checkbox"
              name="genre"
              value={genre.value}
              onChange={onGenreChange}
              checked={selectedGenres.includes(genre.value)}
            />
            {genre.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default InfoGenre;
