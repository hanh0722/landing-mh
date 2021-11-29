import React, { useCallback, useEffect, useState, useRef } from "react";
import { Container, Overlay } from "../container";
import { useRouter } from "next/router";
import { Logo } from "../container";
import Link from "next/link";
import paths from "./path";
import styles from "./Navigation.module.scss";
import useMedia from "../../hook/use-media";
import useToggle from "../../hook/use-toggle";
const Navigation = ({ products }) => {
  const router = useRouter();
  const [navIsScrolled, setNavIsScrolled] = useState(false);
  const matchHamburger = useMedia("(max-width: 991px)");
  const { toggle, changeToggleHandler } = useToggle(false);
  const scrollWindowHandler = useCallback(() => {
    const valueOffset = window.scrollY;
    if (valueOffset > 100) {
      setNavIsScrolled(true);
    } else {
      setNavIsScrolled(false);
    }
  }, []);
  const listRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", scrollWindowHandler);
  }, [scrollWindowHandler]);
  return (
    <>
      <div
        className={`${styles["nav-fix"]} ${
          navIsScrolled && styles["nav-fix-scrolled"]
        }`}
      >
        <Container className={styles.container}>
          <nav
            className={`d-flex justify-content-between align-items-center ${styles.nav}`}
          >
            <Link href="/" passHref={true}>
              <a>
                <Logo />
              </a>
            </Link>
            <ul
              className={`${styles.paths} d-flex align-items-center ${
                matchHamburger && toggle && styles.open
              }`}
            >
              {paths.map((path, index) => {
                if (index === 2) {
                  return (
                    <li
                      onClick={changeToggleHandler}
                      className={`position-relative ${styles.dropdown} ${
                        router.asPath === path.path ||
                        router.pathname === `${path.path}/[id]`
                          ? styles.active
                          : ""
                      }`}
                      key={path.name}
                    >
                      {path.name}
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.23793 -4.99558e-07L6.99984 4.7619L11.7617 -8.32597e-08L13.6665 0.952381L6.99984 7.61905L0.33317 0.95238L2.23793 -4.99558e-07Z"
                          fill="#1D1D1D"
                        />
                      </svg>
                      <ul
                        ref={listRef}
                        className={`${styles["list-dropdown"]}`}
                      >
                        {products &&
                          products?.map((item) => {
                            return (
                              <li
                                className={
                                  (router.asPath || router.pathname) ===
                                  `/products/${item.id}`
                                    ? styles.active
                                    : ""
                                }
                                key={item.id}
                              >
                                <Link href={`/products/${item.id}`}>
                                  {item.title.toLowerCase()}
                                </Link>
                              </li>
                            );
                          })}
                      </ul>
                    </li>
                  );
                }
                if (index === 3) {
                  return (
                    <li
                      onClick={changeToggleHandler}
                      className={
                        router.asPath === path.path ||
                        router.pathname === path.path ||
                        router.pathname === `${path.path}/[id]`
                          ? styles.active
                          : ""
                      }
                      key={path.name}
                    >
                      <Link href={path.path}>{path.name}</Link>
                    </li>
                  );
                }
                return (
                  <li
                    onClick={changeToggleHandler}
                    className={
                      router.asPath === path.path ||
                      router.pathname === path.path ||
                      router.pathname === `${path.path}/[jobId]`
                        ? styles.active
                        : ""
                    }
                    key={path.name}
                  >
                    <Link href={path.path}>{path.name}</Link>
                  </li>
                );
              })}
            </ul>
            {matchHamburger && (
              <div
                onClick={changeToggleHandler}
                className={`${
                  styles.hamburger
                } d-flex flex-column align-items-end justify-content-center ${
                  toggle && styles["open-hamburger"]
                }`}
              >
                {Array.from(Array(3).keys()).map((index) => {
                  return <div key={index} />;
                })}
              </div>
            )}
          </nav>
        </Container>
      </div>
      {toggle && matchHamburger && <Overlay container={styles.layout} />}
    </>
  );
};

export default Navigation;
