import { Typography, Card, CardContent, Grid, Box } from "@mui/material";
import { useGetSingleRecipeQuery } from "../../redux/api/allApi";
import { useParams } from "react-router-dom";
import Loading from "../../components/shared/Loading/Loading";
import Container from "../../components/UI/Container/Container";
import SuggestedRecipe from "./SuggestedRecipe";

const RecipeDetails = () => {
  const params = useParams();
  const { data: recipeData, isLoading } = useGetSingleRecipeQuery(params);
  if (isLoading) {
    return <Loading />;
  }
  const recipe = recipeData.data;
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Container sx={{ marginTop: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {recipe.recipeName}
              </Typography>
              <Typography variant="body1" gutterBottom mb={2}>
                {recipe.recipeDetails}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                <span style={{ fontWeight: "bold" }}>Category:</span>{" "}
                {recipe.category}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                <span style={{ fontWeight: "bold" }}>Country:</span>{" "}
                {recipe.country}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                <span style={{ fontWeight: "bold" }}>Creator:</span>{" "}
                {recipe.creatorEmail}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                <span style={{ fontWeight: "bold" }}>Watch Count:</span>{" "}
                {recipe.watchCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/l8StcslKN04?si=RL0WVTVZRWsMhGoy"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <SuggestedRecipe recipe={recipe} />
      </Box>
    </Container>
  );
};

export default RecipeDetails;
