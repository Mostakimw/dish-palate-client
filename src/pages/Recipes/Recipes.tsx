import { Grid } from "@mui/material";
import Container from "../../components/UI/Container/Container";
import { useGetAllRecipeQuery } from "../../redux/api/allApi";
import RecipeCard from "./RecipeCard";

type TRecipe = {
  _id: string;
  recipeName: string;
  recipeImage: string;
  recipeDetails: string;
  embeddedCode: string;
  category: string;
  watchCount: number;
  purchased_by: string[];
  creatorEmail: string;
  country: string;
  reaction: any[];
};

const Recipes = () => {
  const { data: recipes, isLoading } = useGetAllRecipeQuery(undefined);
  console.log(recipes);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Container sx={{marginTop: 8}}>
      <Grid container spacing={3}>
        {recipes.data.map((recipe: TRecipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe._id}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Recipes;
