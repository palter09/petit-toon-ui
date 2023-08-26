import React from 'react';
import styles from './styles/Rule.module.css';
import {HiSpeakerphone} from 'react-icons/hi';

const Rule = ({ checked, onChange }) => {
  return (
    <>
      <div className={styles.rule_header}>
      <HiSpeakerphone color="	#c83cc8	"/>
      <p>운영원칙</p>
      </div>
      <p className={styles.rule_content}>
        저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하는 게시물은 이용약관 및 관련 법률에 의해 제재를 받으실 수 있습니다.
        성인물, 폭력물 등의 게시물은 통보 없이 삭제될 수 있습니다.
      </p>
      <div className={styles.rule_checkbox}>
        <label>
          <input
            type="checkbox"
            value="r0"
            checked={checked}
            onChange={onChange}
            required
          />
          동의합니다.
        </label>
      </div>
    </>
  );
};

export default Rule;
