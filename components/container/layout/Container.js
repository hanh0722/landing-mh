import { Container as ContainerItem } from "react-bootstrap";
import styles from "./Container.module.scss";
const Container = (props) => {
  return (
    <ContainerItem
      {...props}
      className={`${styles.container} ${props.className}`}
    >
      {props.children}
    </ContainerItem>
  );
};

export default Container;
