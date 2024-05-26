import {
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import {
  useAddReactionMutation,
  useGetSingleRecipeQuery,
} from "../../redux/api/allApi";
import { useParams } from "react-router-dom";
import Loading from "../../components/shared/Loading/Loading";
import Container from "../../components/UI/Container/Container";
import SuggestedRecipe from "./SuggestedRecipe";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../lib/Provider/AuthProviders";
import { ThumbUp, ThumbUpOutlined } from "@mui/icons-material";
import { toast } from "sonner";

const RecipeDetails = () => {
  const params = useParams();
  const { user } = useContext(AuthContext);
  const [hasReacted, setHasReacted] = useState(false);
  console.log(hasReacted);
  const {
    data: recipeData,
    isLoading,
    isError,
  } = useGetSingleRecipeQuery(params);
  const [addReaction] = useAddReactionMutation(undefined);

  useEffect(() => {
    if (recipeData && user) {
      setHasReacted(recipeData.data.reaction.includes(user.email));
    }
  }, [recipeData, user]);

  const handleReaction = async () => {
    const updateInfo = {
      id: params.id,
      userEmail: user?.email,
    };
    try {
      const res = await addReaction(updateInfo).unwrap();
      console.log(res);
      if (res.success) {
        setHasReacted(!hasReacted);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  if (isError) {
    return <div>Error fetching recipe data.</div>;
  }

  if (isLoading || !recipeData) {
    return <Loading />;
  }

  const recipe = recipeData.data;

  return (
    <Container sx={{ marginTop: 8 }}>
      {!isLoading && recipe ? (
        <>
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
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    <span style={{ fontWeight: "bold" }}>Category:</span>{" "}
                    {recipe.category}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    <span style={{ fontWeight: "bold" }}>Country:</span>{" "}
                    {recipe.country}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    <span style={{ fontWeight: "bold" }}>Creator:</span>{" "}
                    {recipe.creatorEmail}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    <span style={{ fontWeight: "bold" }}>Watch Count:</span>{" "}
                    {recipe.watchCount}
                  </Typography>
                  <IconButton onClick={handleReaction}>
                    {hasReacted ? (
                      <ThumbUp color="primary" />
                    ) : (
                      <ThumbUpOutlined />
                    )}
                  </IconButton>
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
        </>
      ) : (
        <p>Loading..</p>
      )}
    </Container>
  );
};

export default RecipeDetails;
