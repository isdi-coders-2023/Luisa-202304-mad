import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <>
      <header className={styles.header}>
        <a onClick={() => navigate("/")}>
          <img className={styles.image} src="../../package.png" alt="logo" />
        </a>
        {children}
      </header>
    </>
  );
}
