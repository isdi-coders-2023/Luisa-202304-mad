import { MenuOptions } from "../../types/menu.options";
import { Link } from "react-router-dom";

type PropsType = {
  options: MenuOptions;
};

export function Menu({ options }: PropsType) {
  return (
    <nav>
      <p>Where do you want to go?</p>
      <ul>
        {options.map((item) => (
          <li key={item.label}>
            <Link to={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
