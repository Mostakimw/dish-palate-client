import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useGetCategoryRecipeQuery } from "../../redux/api/allApi";
import { TRecipe } from "../Recipes/Recipes";

const SuggestedRecipe = ({ recipe }: { recipe: TRecipe }) => {
  const { data: categoryData } = useGetCategoryRecipeQuery({
    category: recipe.category,
  });
  const categories = categoryData.data;

  return (
    <div style={{ marginTop: 40 }}>
      <Typography variant="h4" gutterBottom>
        Suggested Recipes
      </Typography>
      <Box display="flex">
        {categories.map((recipe: TRecipe) => (
          <Card key={recipe._id} style={{ minWidth: 200, marginRight: 16 }}>
            <CardMedia
              component="img"
              height={120}
              image={recipe.recipeImage}
              alt={recipe.recipeName}
            />
            <CardContent>
              <Typography variant="body2" gutterBottom>
                {recipe.recipeName} hello
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Purchased by: {recipe.purchased_by.length}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default SuggestedRecipe;
