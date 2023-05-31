import { MenuOptions } from "../../types/menu.options";
import { Link } from "react-router-dom";
import styles from "./menu.module.scss";

type PropsType = {
  options: MenuOptions;
};

export function Menu({ options }: PropsType) {
  return (
    <nav className={styles.menu}>
      <ul>
        {options.map((item) => (
          <li key={item.label}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
