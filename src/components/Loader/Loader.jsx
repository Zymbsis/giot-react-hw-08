import { DNA } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.dna}>
      <DNA visible={true} height="150" width="150" ariaLabel="dna-loading" />
    </div>
  );
};

export default Loader;
