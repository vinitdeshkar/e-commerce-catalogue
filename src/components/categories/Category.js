import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function Category(props) {
  const onCardClick = () => {
    props.onCategoryClickCallback(props.categoryName);
  };
  return (
    <Card
      sx={{
        height: 100,
        backgroundColor: "floralwhite",
        paddingTop: "50px",
        margin: "20px",
      }}
      onClick={onCardClick}
      raised={true}
    >
      <Typography
        sx={{
          alignItems: "center",
        }}
        gutterBottom
        variant="h5"
        component="div"
      >
        {props.categoryName}
      </Typography>
    </Card>
  );
}
