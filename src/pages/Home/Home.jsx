import { FaBook } from 'react-icons/fa';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Your PhoneBook <FaBook color=" blueviolet" size={75} />{' '}
      </h1>
    </div>
  );
}
