import { useRouter } from "next/router";
import styles from "./index.module.css";

import { pages } from "@root/enums/index";
import { useSessionProviderContext } from "@root/contexts/sessionContext";

const NavBar = (): JSX.Element => {
  const { currentUser } = useSessionProviderContext();

  const navBarItems = [pages.PUBLIC, pages.HOME, pages.USER];

  const router = useRouter();
  const url = router.pathname;

  if (!currentUser?.name) navBarItems.push(pages.SIGN_IN);

  const redirect = (navItemPage: pages) => router.push(`/${navItemPage}`);

  return (
    <nav className={styles.nav}>
      <ul>
        {navBarItems.map((navItemPage) => (
          <li
            key={navItemPage}
            className={`/${navItemPage}` === url ? styles.nav_disabled : ""}
            onClick={() => redirect(navItemPage)}
          >
            {navItemPage}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
