import React, { useState } from "react";
import { products } from "./data";

const ProductList = () => {
  const [list, setList] = useState(products);

  list.sort((a, b) => b.votes - a.votes);

  console.log("Rendering");

  const handleProductUpVote = (productId) => {
    const newList = list.map((item) => {
      if (item.id === productId) {
        return { ...item, votes: item.votes + 1 };
      } else {
        return item;
      }
    });

    setList(newList);
  };

  return (
    <div>
      {list.map((product) => (
        <Product
          key={"product-" + product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
          onVote={handleProductUpVote}
        />
      ))}
    </div>
  );
};

export default ProductList;

const Product = (props) => {
  return (
    <div className="item">
      <div className="image">
        <img className="item-img" src={props.productImageUrl} alt="" />
      </div>
      <div className="content">
        <div className="header">
          <button
            className="button button-vote"
            onClick={() => props.onVote(props.id)}
          >
            <i className="fa fa-caret-up"></i>
          </button>
          {props.votes}
        </div>
        <div className="description">
          <a href={props.url}>{props.title}</a>
          <p>{props.description}</p>
        </div>
        <div className="extra">
          <span>Submited by:</span>
          <img src={props.submitterAvatarUrl} alt=""></img>
        </div>
      </div>
    </div>
  );
};
