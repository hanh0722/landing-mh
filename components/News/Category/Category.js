import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Category.module.scss";
import { categoryActions } from "../../../store/slices/category-slice";
const Category = ({ categories, type, matchMedia }) => {
  
  const dispatch = useDispatch();
  const [position, setPosition] = useState(null);

  const changeType = (id, event) => {
    dispatch(categoryActions.changeCategoryHandler(id));
    const position = event.target.getBoundingClientRect();
    setPosition(position);
  };
  return (
    <div className={styles.category}>
      <h6>{matchMedia ? "Tin gần đây" : "Danh mục tin tức"}</h6>
      <div className={styles.flow}>
        <ul>
          <li
            className={type === 0 ? styles.active : ""}
            onClick={(event) => changeType(0, event)}
          >
            TẤT CẢ
          </li>
          {categories?.map((category, index) => {
            return (
              <li
                onClick={(event) => changeType(category.categoryId, event)}
                className={type === category.categoryId ? styles.active : ""}
                key={index}
              >
                {category.title.toUpperCase()}
              </li>
            );
          })}
          {matchMedia && (
            <span
              style={
                position
                  ? { width: position?.width, left: position?.left - 23 }
                  : null
              }
              className={styles.line}
            />
          )}
        </ul>
      </div>
    </div>
  );
};

export default Category;
