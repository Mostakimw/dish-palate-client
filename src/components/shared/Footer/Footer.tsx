import { Grid, IconButton, Stack, Typography } from "@mui/material";
import Container from "../../UI/Container/Container";
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#666f73",
        padding: "50px 0",
        marginTop: 70,
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
              We’d love to hear your feedback and culinary stories!
            </Typography>
            <Stack
              direction="row"
              gap={1}
              sx={{
                "& button": {
                  "&:hover": {
                    backgroundColor: "primary.main",
                  },
                },
              }}
            >
              <IconButton
                component="a"
                href="https://github.com/Mostakimw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href="https://facebook.com/moostakimahamed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com/in/mostakim-ahamed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography color="#F5F5F5">
              We’d love to hear from you! Whether you have questions, feedback,
              or just want to share your culinary experiences, feel free to
              reach out. Connect with us on social media or send us an email.
              Let’s create delicious memories together!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
