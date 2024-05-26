import { Box, Button, Stack, Typography } from "@mui/material";
import Container from "../../Container/Container";
import LightModeIcon from "@mui/icons-material/LightMode";

const Banner = () => {
  return (
    <Container sx={{ marginTop: 4, position: "relative" }}>
      <Typography
        variant="h3"
        fontWeight={700}
        textAlign="center"
        maxWidth={{ xs: "100%", md: 700 }}
        margin="0 auto"
        fontSize={{ xs: "2rem", md: "3rem" }}
      >
        Learn All Types Of <span style={{ fontWeight: "500" }}>Cooking</span>{" "}
        <span style={{ fontWeight: "500" }}>With</span> Foodmaker
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={3}
        sx={{ px: { xs: 2, md: 5 }, pt: { xs: 3, md: 6 } }}
      >
        <Box>
          <Typography maxWidth={{ xs: "100%", md: 600 }}>
            Welcome to Dish Palate! Dive into a world of flavors with our
            diverse collection of recipes crafted by passionate cooks from
            around the globe. Whether you're a novice in the kitchen or a
            seasoned chef, Dish Palate is your gateway to delicious creations
            and culinary inspiration. Explore mouth-watering recipes or share
            your own culinary masterpieces. Get started now and unlock the
            secrets to gourmet cooking. Ready to cook up a storm? See our
            recipes or add your own today!
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} gap={3} marginTop={7}>
            <Button>Explore Recipes</Button>
            <Button variant="outlined">Recipes</Button>
          </Stack>
        </Box>
        <Box pr={{ xs: 0, md: 6 }} mt={{ xs: 4, md: 0 }}>
          <img
            src="https://img.freepik.com/free-photo/male-cook-standing-kitchen-presenting-delicious-dish_23-2147863798.jpg?t=st=1716564364~exp=1716567964~hmac=164a6f1ec959ae078229690d76a22c05ea2004684b1b20681482473e5b1c08b5&w=740"
            alt=""
            height={500}
            style={{ borderRadius: 2, width: "100%", objectFit: "cover" }}
          />
        </Box>
      </Stack>
      {/* hisab section */}
      <Box
        sx={{
          width: { xs: "100%", md: "950px" },
          position: { md: "absolute" },
          border: "3px solid #D3D3D3",
          bottom: { xs: 0, md: 45 },
          marginTop: { xs: 8, md: 0 },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            padding: { xs: "20px 10px", md: "30px 20px" },
            width: "100%",
          }}
        >
          <Box sx={{ padding: { xs: "5px 10px", md: "10px 22px" } }}>
            <Typography variant="h3" fontSize={{ xs: "1.5rem", md: "2.5rem" }}>
              200+
            </Typography>
            <Typography fontWeight={500} component="p" color="#63676A">
              Food Recipe
            </Typography>
          </Box>
          <Box sx={{ padding: { xs: "5px 10px", md: "10px 22px" } }}>
            <Typography variant="h3" fontSize={{ xs: "1.5rem", md: "2.5rem" }}>
              500+
            </Typography>
            <Typography fontWeight={500} component="p" color="#63676A">
              Item of Food
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#1F1F1F",
              display: "flex",
              gap: "15px",
              alignItems: "center",
              padding: { xs: "5px 10px", md: "10px 22px" },
              color: "white",
            }}
          >
            <Box>
              <LightModeIcon fontSize="large" />
            </Box>
            <Box>
              <Typography
                variant="h3"
                color="white"
                fontSize={{ xs: "1.5rem", md: "2.5rem" }}
              >
                500k+
              </Typography>
              <Typography fontWeight={500} component="p" color="white">
                Happy Customer
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default Banner;
