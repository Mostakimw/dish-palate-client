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
        maxWidth={700}
        margin="0 auto"
      >
        {" "}
        Learn All Types Of <span style={{ fontWeight: "500" }}>
          Cooking
        </span>{" "}
        <span style={{ fontWeight: "500" }}>With</span> Foodmaker
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        gap={3}
        sx={{ px: 5, pt: 6 }}
      >
        <Box>
          <Typography maxWidth={600}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quod similique soluta quam nesciunt tempore temporibus atque id
            quibusdam dignissimos autem alias molestias deleniti, repudiandae
            modi repellat, nam aperiam neque nulla, rem esse numquam. Ipsam
            natus non eos blanditiis eius, veritatis eum porro minus omnis
            laudantium quibusdam ut debitis tenetur? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quia, enim.
          </Typography>
          <Stack direction="row" gap={3} marginTop={7}>
            <Button>Explore Recipes</Button>
            <Button variant="outlined">Recipes</Button>
          </Stack>
        </Box>
        {/* image */}
        <Box pr={6}>
          <img
            src="https://img.freepik.com/free-photo/male-cook-standing-kitchen-presenting-delicious-dish_23-2147863798.jpg?t=st=1716564364~exp=1716567964~hmac=164a6f1ec959ae078229690d76a22c05ea2004684b1b20681482473e5b1c08b5&w=740"
            alt=""
            height={500}
            style={{ borderRadius: 2 }}
          />
        </Box>
      </Stack>
      {/* hisab section */}
      <Box
        sx={{
          width: "950px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            border: "3px solid #D3D3D3",
            bottom: 45,
            width: "950px",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ padding: "30px 20px", width: "100%" }}
            width="100%"
          >
            <Box sx={{ padding: "10px 22px" }}>
              <Typography variant="h3">200+</Typography>
              <Typography fontWeight={500} component="p" color="#63676A">
                Food Recipe
              </Typography>
            </Box>
            <Box sx={{ padding: "10px 22px" }}>
              <Typography variant="h3">500+</Typography>
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
                padding: "10px 22px",
                color: "white",
              }}
            >
              <Box sx={{}}>
                <LightModeIcon fontSize="large" />
              </Box>
              <Box>
                <Typography variant="h3" color="white">
                  500k+
                </Typography>
                <Typography fontWeight={500} component="p" color="white">
                  Happy Customer
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Banner;
