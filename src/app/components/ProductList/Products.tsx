import React, { useEffect, useState } from "react";
import { fetchProducts } from "@/app/state/features/ProductSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/state/store";
import { Product } from "@/app/utils/types";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { red } from "@mui/material/colors";

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  let { isLoading, productList } = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        backgropundColor: "#F0F0F0",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingY: 10,
      }}
    >
      <Box sx={{ paddingY: 5 }}>
        <Typography variant="overline" display="block" gutterBottom>
          Featured Products
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#252B42" }}
          gutterBottom
        >
          BEST SELLER PRODUCTS
        </Typography>
        <Typography variant="caption" gutterBottom>
          The best you can get for lowest price always!
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isLoading &&
          productList.products.map((product: Product) => (
            <Grid key={product.id} item xs={12} md={3}>
              <Paper
                elevation={1}
                sx={{
                  width: "100%",
                  height: "50vh",
                  marginBottom: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  src={`${product.images[0]}`}
                  width={200}
                  height={50}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "30vh",
                    objectFit: "contain",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 5,
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#252B42" }}>
                    {product.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#737373" }}>
                    {product.brand} {product.category}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#737373" }}>
                    Price: {product.price} {" at "} {product.discountPercentage}
                    % Off
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
      </Grid>
      <Button
        sx={{
          width: 200,
          border: "1px solid #23A6F0",
          backgroundColor: "white",
          color: "primary.main",
          fontVariant: "all-small-caps",
          "&:hover": {
            backgroundColor: "primary.dark",
            color: "white",
            //border: "none",
          },
        }}
      >
        Load more
      </Button>
    </Box>
  );
};

export default Products;
