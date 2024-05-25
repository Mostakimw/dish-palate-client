import { Box, Grid, Typography, Divider } from "@mui/material";
import Container from "../../Container/Container";

const Profile = () => {
  return (
    <Container sx={{ mt: 12 }}>
      <Grid container spacing={4}>
        {/* image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://via.placeholder.com/600" // Replace with your image URL
            alt="Profile Image"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
            }}
          />
        </Grid>
        {/* details */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Mostakim Ahamed
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Full Stack Developer
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              1.5+ Years of Experience
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              <strong>Technology Skills:</strong> JavaScript, TypeScript, React,
              Redux+RTK Query, Next.js, Node.js, Express.js, MongoDb, Mongoose
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              <strong>Interpersonal Skills:</strong> Communication,
              Collaboration,
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={2}>
              Creative and detail-oriented front-end developer with expertise in
              React.js, Redux, Next.js, Typescript, and modern web technologies.
              Crafting polished, user-friendly interfaces while following
              industry-standard patterns for web application development. I am
              seeking a role to apply my expertise and interpersonal skills to
              pursue my career goals.
            </Typography>
          </Box>
          {/* education */}
          <Box marginTop={3}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Education
            </Typography>
            <Box>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                2022 - Present
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Delta Computer Science College, Rangpur
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Computer Science And Engineering
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Nurturing my passion for technology and shaping my skills in
                computer science through comprehensive academic programs and
                practical learning experiences.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4 }} />
    </Container>
  );
};

export default Profile;
