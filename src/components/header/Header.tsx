import "./Header.modules.scss";

type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  return (
    <>
      <header className="header">
        <img src="../../package.png" alt="logo" width="30%" />
        {children}
      </header>
    </>
  );
}
