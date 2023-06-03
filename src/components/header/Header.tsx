import styles from "./Header.module.scss";

type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.image} src="../../package.png" alt="logo" />
        {children}
      </header>
    </>
  );
}
