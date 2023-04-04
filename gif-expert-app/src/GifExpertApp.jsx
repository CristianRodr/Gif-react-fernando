import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; // Validando valores unicos
    /*categories.push(newCategory);*/
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/*titulo*/}
      <h1>GifExpertApp</h1>
      {/*input*/}
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={(value) => onAddCategory(value)} // Mejorando
      />{" "}
      {/*Emitiendo valor que quiero insertar*/}
      {/*listado gif*/}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/*gif item*/}
    </>
  );
};
