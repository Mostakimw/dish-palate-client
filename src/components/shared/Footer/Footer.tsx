import { Grid, IconButton, Stack, Typography } from "@mui/material";
import Container from "../../UI/Container/Container";
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#666f73",
        padding: "50px 0",
        marginTop: 70
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2" color="#F5F5F5">
              Get In Touch
            </Typography>
            <Typography
              maxWidth={400}
              component="p"
              color="#F5F5F5"
              my={2}
              ml={1}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              voluptatum unde accusamus ?
            </Typography>
            <Stack
              direction="row" gap={1}
              sx={{
                "& button": {
                  "&:hover": {
                    backgroundColor: "primary.main",
                  },
                },
              }}
            >
              <IconButton>
                <GitHub />
              </IconButton>
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography color="#F5F5F5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              atque sint dolore. Quod corrupti, dolore repellendus fugiat illo
              libero, a aliquid eaque eum quas ipsa quos optio aspernatur iste
              laudantium.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
