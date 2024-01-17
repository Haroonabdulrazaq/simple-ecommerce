"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { ProductDetailPageProps } from "@/app/utils/types";
import { useAppDispatch } from "@/app/state/store";
import SimpleSnackbar from "@/app/components/SnackBar";
import {
  fetchProducts,
  fetchSingleProduct,
  addToWishList,
  addToCart,
  removeFromWishList,
  removeFromCart,
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
  const [isWish, setIsWish] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [snackIsOpen, setSnackIsOpen] = React.useState(false);
  const [snackCartIsOpen, setCartSnackIsOpen] = React.useState(false);
  const {
    isLoading,
    isLoadingSingleProduct,
    singleProduct,
    bestSellerProducts,
    wishList,
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

  const handleWishList = () => {
    setIsWish(true);
    setSnackIsOpen(true);
    dispatch(addToWishList(singleProduct));
  };
  const removeWishItem = () => {
    setIsWish(false);
    setSnackIsOpen(true);
    dispatch(removeFromWishList(productId));
  };
  const handleCart = () => {
    setIsCart(true);
    setCartSnackIsOpen(true);
    dispatch(addToCart(singleProduct));
  };
  const removeCartItem = () => {
    setIsCart(false);
    setCartSnackIsOpen(true);
    dispatch(removeFromCart(productId));
  };

  const handleCloseSnack = () => {
    setSnackIsOpen(false);
  };
  const handleCloseCartSnack = () => {
    setCartSnackIsOpen(false);
  };

  const BrandGrid = styled(Grid)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "100px 0",
  }));

  if (isLoadingSingleProduct) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Container
      sx={{
        minHeight: "100vh",
      }}
    >
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
                    backgroundColor: "#E77C40",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    height: "24px",
                    width: "24px",
                    backgroundColor: "#23A6F0",
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
              <IconButton
                aria-label="add to favorites"
                onClick={!isWish ? handleWishList : removeWishItem}
                sx={{ color: isWish ? "secondary.main" : "default" }}
              >
                {isWish ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                <SimpleSnackbar
                  text={
                    isWish ? "Added to wish list" : "Removed from wish list"
                  }
                  openSnack={snackIsOpen}
                  handleClose={handleCloseSnack}
                />
              </IconButton>
              <IconButton
                aria-label="add to cart"
                onClick={!isCart ? handleCart : removeCartItem}
                sx={{ color: isCart ? "secondary.main" : "default" }}
              >
                {isCart ? <ShoppingCartIcon /> : <RemoveShoppingCartIcon />}
                <SimpleSnackbar
                  text={isCart ? "Added to Cart" : "Removed from Cart"}
                  openSnack={snackCartIsOpen}
                  handleClose={handleCloseCartSnack}
                />
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
            The quick fox jumps over
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
              priority
              width={500}
              height={500}
              style={{
                objectFit: "contain",
              }}
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
          src={"/assets/Images/brand-1.webp"}
          alt="brand-1"
          width={100}
          height={100}
        />

        <Image
          src={"/assets/Images/brand-2.webp"}
          alt="brand-2"
          width={100}
          height={100}
        />

        <Image
          src={"/assets/Images/brand-3.webp"}
          alt="brand-3"
          width={100}
          height={100}
        />

        <Image
          src={"/assets/Images/brand-4.webp"}
          alt="brand-4"
          width={100}
          height={100}
        />
        <Image
          src={"/assets/Images/brand-5.webp"}
          alt="brand-5"
          width={100}
          height={100}
        />
        <Image
          src={"/assets/Images/brand-6.webp"}
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
