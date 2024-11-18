import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { useEffect, useRef } from "react";

export const Header = () => {
  const buttonMenu = useRef<HTMLDivElement>(null);
  const burgerMenu = useRef<HTMLUListElement>(null);
  useEffect(() => {
    buttonMenu.current?.addEventListener("click", () => {
      buttonMenu.current?.classList.toggle(`${styles.active}`);
      burgerMenu.current?.classList.toggle(`${styles.active}`);
			if(document.body.style.overflow === 'hidden'){
				document.body.style.overflow = 'auto';
			}else{
				document.body.style.overflow = 'hidden';
			}
    });
  }, []);
  return (
    <div className="wrapper">
      <ul ref={burgerMenu} className={styles.menu}>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/about_us">Создатели</Link>
        </li>
        <li>
          <Link to="/about_project">О проекте</Link>
        </li>
        <li>
          <Link to="https://www.typescriptlang.org/play/?ts=4.9.5#code/MYewdgzgLgBFCmAPWBeGByArAE3gM3gCMAneYgcymMPQChRJYBXMASwGsAuGAbxggCeAW0IgANt2jFWYcgBoYM3Im5gmIsjAC+AbQC6MNPtr1w0GCw7wBAYRC5DMABQBKQwD5etAJBj4sFRgAQzABRwRkADooEAAZEGAgv3iAdzIbIIh4VxNvFIALVj9nKiZ4Nx4fb1Y8ZwBCREi-WSh8iqrvEngg9iqtKst2SIAHJgh8pz5BEXFuRB0ABj0FJSRuQab4FvyYAGoYAEZtFyrER0bSYbEg4HgAQTExJ3mlhXR0E+9+-sHrO1wcqZGDBgKQgggAPKEABW8GAUAAsuDpIg7mBsLFMlAAHLqQiaNBOCJQSRUGTyGDsazcKbCUQSfhk2QrdFrGBqDTEbT6FzcHQc-HEfTC5bsvFkfQGFCeSreBjmKTkgAqIFxnNU4qFUpgxjlZlgQmRrFRxGIQQEGs5Iv0jmMPjwIC5Tj8sCkMBAtWJ7W83gdTpdMGh7tqVIE3p9NWcbpQMcDkWm9PDPsVshVasFIzGE2hkVWiE+Pv6hZ8RftjucAdYjgAzABuRQwAA8jOkqdVms223rVd2aAALOHDWSTWaBJnxk4eblvEOUXdTeadEjWpE8GIQI6nFWAPQwAd6ccTKc+2fG+ejpfg-Kr9ebnd7lx6RYH0YTlPkNOanRVgC0MGrorvp+Vq-jAABMegnFUp4jouy7XmuG7EFuMC7vuh6TpB0FGrBAiXiuiF3qhD5PgcL5Zk4QHtiBMB-mRChUemEqsFhXy5KQUBMMQYA6jB57mgxTIftRGbNJQOwAKR7oYsYLDAAD8OoGKSrbCUxxDxmIrC3E4P6MR2YmtDAUn7rQ-S0HgLDwqw4DusMpC4FpCBiGBTgwZagoiryYqcl43gcVxPEwc+z4wAAVDAwVkToZG0ZFOEhbFEVRU+SxmSY8qwKC3QIAAEpk+QAGJWVANk8YSfELhaPmeU+dUKNc0DqR5EqQR4fkBvkBXqY4Cxlv6-gNmgCzdk28XDvxY6Gfk3a7Ls4ZdeMPW9jA8GREEhAQE4ID2fAjmsM5rmVReLEuJ8RZ+s4mUwPAYjBjAjU4pqC3dZqexoLdJY+AF3EwIt+Tqel8riPATQgOQTjZeC8D5eMxVgNZ4BOJEKNQ5CMJwoiOFohiWLqUSSBQAogxnS4QA">Код</Link>
        </li>
      </ul>
      <div className={styles.burger}>
        <div ref={buttonMenu} className={styles.burger_menu}>
          <span></span>
        </div>
      </div>
    </div>
  );
};
