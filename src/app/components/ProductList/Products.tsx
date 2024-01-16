import React, { useEffect, useState } from "react";
import {
  fetchProducts,
  handleProductList,
} from "@/app/state/features/ProductSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/state/store";
import { Product } from "@/app/utils/types";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";

const Products: React.FC = () => {
  const PRODUCTS_PER_PAGE = 12;
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const dispatch = useAppDispatch();
  let { isLoading, productResponse } = useSelector(
    (state: any) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProducts({ limit: PRODUCTS_PER_PAGE, skip: 0 }));
  }, [dispatch]);

  const loadMoreProducts = async () => {
    const skip = page * PRODUCTS_PER_PAGE;

    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`,
      );
      const data: any = await response.json();
      if (data.products && Array.isArray(data.products)) {
        if (data.products.length === 0) {
          setHasMore(false);
        } else {
          setProducts((prevProducts) => [...prevProducts, ...data.products]);
          dispatch(handleProductList(data.products));
          setPage((prevPage) => prevPage + 1);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      return error;
    }
  };

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
          minHeight: "50vh",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading ? (
          <Typography>Loading</Typography>
        ) : (
          productResponse.products &&
          productResponse.products.map((product: Product) => (
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
          ))
        )}
      </Grid>
      {hasMore && (
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
            },
          }}
          onClick={loadMoreProducts}
        >
          Load more
        </Button>
      )}
    </Box>
  );
};

export default Products;
