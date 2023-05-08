import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Category from "./Category";
import axios from "axios";
import AllProducts from "../products/AllProducts";

export default function AllCategories() {
  const [categories, setCategories] = useState([]);

  const [showAllCategories, setShowAllCategories] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState();
  const [allProductsForCategory, setAllProductsForCategory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesResponse = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(categoriesResponse.data);
    };
    fetchCategories();
  }, []);

  //Fetch single product details
  useEffect(() => {
    const fetchProductsForCategory = async () => {
      const productDataForCategory = await axios.get(
        `https://dummyjson.com/products/category/${selectedCategory}`
      );

      setAllProductsForCategory(productDataForCategory.data.products);
    };
    selectedCategory && fetchProductsForCategory();
  }, [selectedCategory]);

  const onCategoryClickCallback = (categoryName) => {
    setShowAllCategories(false);
    setSelectedCategory(categoryName);
  };

  if (showAllCategories) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {categories.map((category) => (
            <Grid key={category}>
              <Paper
                sx={{
                  width: 180,
                  backgroundColor: "floralwhite",
                  height: 150,
                }}
              >
                <Category
                  categoryName={category}
                  onCategoryClickCallback={onCategoryClickCallback}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  if (selectedCategory && allProductsForCategory) {
    return <AllProducts allProducts={allProductsForCategory} />;
  }
}
