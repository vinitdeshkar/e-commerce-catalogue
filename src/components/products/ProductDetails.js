import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import ProductImages from "./ProductImages";

export default function ProductDetails(props) {
  return (
    <Card sx={{ maxWidth: 800, height: 800 }}>
      <ProductImages imageUrls={props.productInfo.images} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.productInfo.title}
        </Typography>
        <Rating name="read-only" value={props.productInfo.rating} readOnly />
        <Typography gutterBottom variant="p" component="div">
          <b>{props.productInfo.brand}</b>
        </Typography>
        <label>
          <b>Price: ${props.productInfo.price}</b>
        </label>
        <br />
        <label>
          <b>Discount: {props.productInfo.discountPercentage}% </b>
        </label>
        <br />
        <label>
          <b>Stock: {props.productInfo.stock} units</b>
        </label>
        <br />
        <label>
          <b>Category: {props.productInfo.category}</b>
        </label>
      </CardContent>
    </Card>
  );
}
