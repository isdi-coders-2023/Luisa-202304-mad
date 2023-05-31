import "./Header.modules.scss";

type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  return (
    <>
      <header className="header">
        <img src="../../public/package.png" alt="logo" width="30%" />
        {children}
      </header>
    </>
  );
}
