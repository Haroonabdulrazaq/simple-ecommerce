import React, { useEffect, useState } from "react";
import {
  fetchProducts,
  handleProductList,
} from "@/app/state/features/ProductSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/state/store";
import { Product } from "@/app/utils/types";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import ProductGrid from "./ProductGrid";

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
      {!isLoading && <ProductGrid productResponse={productResponse} />}
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
