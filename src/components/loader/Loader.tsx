import ReactDOM from "react-dom";

import loader from "../../assets/loader.gif";

import styles from "../loader/Loader.module.css";

type Props = {};
//loader component here and in the index.html

function Loader({}: Props) {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loader} alt="loader" />
      </div>
    </div>,
    document.getElementById("loader")!
  );
}

export default Loader;
