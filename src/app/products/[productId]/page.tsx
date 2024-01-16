"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Rating,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { ProductDetailPageProps } from "@/app/utils/types";
import { useAppDispatch } from "@/app/state/store";
import {
  fetchProducts,
  fetchSingleProduct,
} from "@/app/state/features/ProductSlice";
import { useSelector } from "react-redux";
import Image from "next/image";
import BottomFooter from "@/app/components/Footer/BottomFooter";
import Link from "next/link";
import ProductGrid from "@/app/components/ProductList/ProductGrid";

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  let { productId } = params;
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState("Review (0)");
  const {
    isLoading,
    isLoadingSingleProduct,
    singleProduct,
    bestSellerProducts,
  } = useSelector((state: any) => state.products);

  useEffect(() => {
    if (productId) {
      dispatch(fetchSingleProduct(productId));
      dispatch(fetchProducts({ limit: 12, skip: 0 }));
    }
  }, [dispatch, productId]);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const BrandGrid = styled(Grid)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "100px",
  }));
  console.log("bestSellerProducts", bestSellerProducts);

  if (isLoadingSingleProduct) {
    return <Typography>loadings...</Typography>;
  }
  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{
          marginY: "50px",
          padding: "15px",
        }}
      >
        <Breadcrumbs separator=">" aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Product Detail</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <Image
            src={singleProduct.images[0]}
            alt={singleProduct.title}
            width={150}
            height={150}
            style={{
              width: "100%",
              height: "32.5vh",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "35vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "centre",
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              {singleProduct.title}
            </Typography>
            <Rating name="read-only" value={singleProduct.rating} readOnly />
            <Typography variant="body2" color="textSecondary" component="p">
              10 Reviews
            </Typography>
            <Typography variant="h4" component="p">
              ${singleProduct.price}
            </Typography>
            <Typography
              variant="body1"
              color="secondary.main"
              sx={{ fontWeight: "bold" }}
            >
              Availability: In Stock
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <div
                  style={{
                    height: "24px",
                    width: "24px",
                    backgroundColor: "blue",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    height: "24px",
                    width: "24px",
                    backgroundColor: "green",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    height: "24px",
                    width: "24px",
                    backgroundColor: "orange",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    height: "24px",
                    width: "24px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Button
                sx={{
                  width: "200px",
                  padding: "10px",
                  color: "#FFFFFF",
                  backgroundColor: "primary.main",
                  marginRight: "20px",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                }}
              >
                Select Options
              </Button>
              <IconButton aria-label="add to favorites">
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton aria-label="add to cart">
                <ShoppingCartIcon />
              </IconButton>
              <IconButton aria-label="share">
                <RemoveRedEyeIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Paper elevation={2} sx={{ padding: "20px", marginY: "40px" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Additional Information" value="Additional Information" />
          <Tab label="Description" value="Description" />
          <Tab label="Review (0)" value="Review (0)" />
        </Tabs>
      </Paper>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h4" gutterBottom>
            the quick fox jumps over
          </Typography>
          <Typography variant="body1">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </Typography>
          <Typography variant="body1">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </Typography>
          <Typography variant="body1">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "100%", height: "auto" }}>
            <Image
              src="/assets/Images/wall-art.svg"
              alt="Product Image"
              width={500}
              height={300}
              layout="responsive"
            />
          </Box>
        </Grid>
      </Grid>
      <Paper elevation={1} sx={{ padding: 3, marginY: 7 }}>
        <Typography variant="h6">BEST SELLER PRODUCT</Typography>
      </Paper>
      {!isLoading && <ProductGrid productResponse={bestSellerProducts} />}

      <BrandGrid item xs={12}>
        <Image
          src={"/assets/Images/brand-1.svg"}
          alt="brand-1"
          width={100}
          height={100}
        />
        <Image
          src={"/assets/Images/brand-2.svg"}
          alt="brand-2"
          width={100}
          height={100}
        />
        <Image
          src={"/assets/Images/brand-3.svg"}
          alt="brand-3"
          width={100}
          height={100}
        />
        <Image
          src={"/assets/Images/brand-4.svg"}
          alt="brand-4"
          width={100}
          height={100}
        />
        <Image
          src={"/assets/Images/brand-5.svg"}
          alt="brand-5"
          width={100}
          height={100}
        />
        <Image
          src={"/assets/Images/brand-6.svg"}
          alt="brand-6"
          width={100}
          height={100}
        />
      </BrandGrid>
      <BottomFooter />
    </Container>
  );
};

export default ProductDetailPage;
