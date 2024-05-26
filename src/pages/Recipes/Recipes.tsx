import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Container from "../../components/UI/Container/Container";
import { useGetAllRecipeQuery } from "../../redux/api/allApi";
import RecipeCard from "./RecipeCard";
import Loading from "../../components/shared/Loading/Loading";
import { useState } from "react";

export type TRecipe = {
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

const categories = ["Breakfast", "Lunch", "Dinner", "Snacks"];
const countries = ["f", "Italy", "France", "India"];

const Recipes = () => {
  const [category, setCategory] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data: recipes, isLoading } = useGetAllRecipeQuery({
    category,
    country,
    search: searchQuery,
  });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container sx={{ marginTop: 8 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          {/* filter by category */}
          <FormControl fullWidth>
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              labelId="category-select-label"
              label="Category"
              id="category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value as string)}
            >
              {categories.map((categoryOption) => (
                <MenuItem key={categoryOption} value={categoryOption}>
                  {categoryOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* filter by country  */}
          <FormControl fullWidth>
            <InputLabel id="country-select-label">Country</InputLabel>
            <Select
              labelId="country-select-label"
              id="country-select"
              label="Category"
              value={country}
              onChange={(e) => setCountry(e.target.value as string)}
            >
              {countries.map((countryOption) => (
                <MenuItem key={countryOption} value={countryOption}>
                  {countryOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* search query here */}
          <TextField
            label="Search Recipe"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value as string)}
          />
        </Grid>
        {/* recipe data showing here */}
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
