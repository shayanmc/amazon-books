import React from "react";
export default function Books({author, img, title}) {
  return (
    <article>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}
