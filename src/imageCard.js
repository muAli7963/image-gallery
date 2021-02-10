import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="card">
      <img src={image.webformatURL} alt="" />
      <div className="card-body">
        <h3 className="card-title">{image.user}</h3>
        <ul>
          <li>
            <strong>Views: {image.views} </strong>
          </li>
          <li>
            <strong>Downloads: {image.downloads} </strong>
          </li>
          <li>
            <strong>Likes: {image.likes} </strong>
          </li>
        </ul>
      </div>
      <div className="span-container">
        {tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
