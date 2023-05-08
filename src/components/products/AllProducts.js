import axios from "axios";
import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";

export default function AllProducts(props) {
  const [allProducts, setAllProducts] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState();
  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsResponse = await axios.get(
        "https://dummyjson.com/products"
      );
      setAllProducts(productsResponse.data.products);
    };

    if (!props.allProducts) {
      fetchProducts();
    } else {
      setAllProducts(props.allProducts);
    }
  }, [props.allProducts]);

  //Fetch single product details
  useEffect(() => {
    const fetchProductDetails = async () => {
      const productData = await axios.get(
        `https://dummyjson.com/products/${selectedProductId}`
      );
      setProductDetails(productData.data);
    };
    selectedProductId && fetchProductDetails();
  }, [selectedProductId]);

  const onProductClickCallback = (productId) => {
    setShowAllProducts(false);
    setSelectedProductId(productId);
  };

  if (showAllProducts) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {allProducts.map((productInfo) => (
            <Grid key={productInfo.id}>
              <Paper
                sx={{
                  width: 200,
                  backgroundColor: "whitesmoke",
                }}
              >
                <ProductCard
                  productInfo={productInfo}
                  onProductClickCallback={onProductClickCallback}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  if (selectedProductId && productDetails) {
    return <ProductDetails productInfo={productDetails} />;
  }
}
