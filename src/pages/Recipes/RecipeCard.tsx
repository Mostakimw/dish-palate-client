import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, TUser } from "../../lib/Provider/AuthProviders";
import Swal from "sweetalert2";
import { useUpdateAfterBuyMutation } from "../../redux/api/allApi";
import { TRecipe } from "./Recipes";

const RecipeCard = ({ recipe }: { recipe: TRecipe }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [updateInformation] = useUpdateAfterBuyMutation(undefined);

  // handle view the recipe
  const handleViewRecipe = async () => {
    // if user not logged in
    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "Please log in to view the recipe.",
        icon: "warning",
      });
      return;
    }

    // if user is the creator of that recipe
    try {
      const userData = user as TUser;

      if (userData.email === recipe.creatorEmail) {
        navigate(`/recipe/${recipe._id}`);
        return;
      }

      // if user have less than 10 coin
      if (userData.coin < 10) {
        Swal.fire({
          title: "Not Enough Coins",
          text: "You don't have enough coins. Please purchase more.",
          icon: "warning",
        }).then(() => {
          navigate("/purchase-coins");
        });
        return;
      }

      // if user already purchased
      if (userData.email && recipe.purchased_by.includes(userData.email)) {
        navigate(`/recipe/${recipe._id}`);
        return;
      }

      // showing the basic modal when click view details btn
      const result = await Swal.fire({
        title: "Confirm Purchase",
        text: "Do you want to spend 10 coins to view this recipe?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      });

      if (result.isConfirmed) {
        //! updating user and recipe information here
        await updateInformation({
          userEmail: user.email,
          recipeId: recipe._id,
        });
        Swal.fire({
          title: "Purchase Successful",
          text: "You've successfully purchased the recipe.",
          icon: "success",
        });
        navigate(`/recipe/${recipe._id}`);
      }
    } catch (error) {
      console.error("Error handling view recipe:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="340"
        image={recipe.recipeImage}
        alt={recipe.recipeName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {recipe.recipeName}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          Country: {recipe.country}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          Created by: {recipe.creatorEmail}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          Purchased by: {recipe.purchased_by.length}
        </Typography>
        <Button
          variant="contained"
          sx={{ marginTop: 2 }}
          color="primary"
          onClick={handleViewRecipe}
        >
          View The Recipe
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
