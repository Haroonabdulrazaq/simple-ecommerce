import { Typography, Grid, Box, Paper } from "@mui/material";
import { Product, ProductGridProps } from "@/app/utils/types";
import Image from "next/image";
import Link from "next/link";

const ProductGrid: React.FC<ProductGridProps> = ({ productResponse }) => {
  return (
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
      {productResponse.products &&
        productResponse.products.map((product: Product) => (
          <Grid key={product.id} item xs={12} md={3}>
            <Link
              href={`/products/${product.id}`}
              style={{
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
                alt="Product title"
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
                  Price: {product.price} {" at "} {product.discountPercentage}%
                  Off
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
    </Grid>
  );
};

export default ProductGrid;
