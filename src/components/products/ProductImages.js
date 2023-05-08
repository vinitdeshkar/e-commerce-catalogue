import React from "react";
import Carousel from "react-material-ui-carousel";
import CardMedia from "@mui/material/CardMedia";

export default function ProductImages(props) {
  function Item(props) {
    return (
      <CardMedia
        component="img"
        height="500"
        width="300"
        image={props.url}
        alt="green iguana"
      />
    );
  }

  return (
    <Carousel>
      {props.imageUrls.map((imageUrl, i) => (
        <Item key={i} url={imageUrl} />
      ))}
    </Carousel>
  );
}
