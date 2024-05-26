import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useCreateRecipeMutation } from "../../redux/api/allApi";
import { toast } from "sonner";
import Container from "../../components/UI/Container/Container";

// ! recipe data schema for validation
const recipeSchema = z.object({
  recipeName: z.string().min(1, "Recipe name is required"),
  recipeImage: z
    .any()
    .refine((files) => files && files.length > 0, "Image is required"),
  recipeDetails: z.string().min(1, "Recipe details are required"),
  youtubeVideo: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  category: z.string().min(1, "Category is required"),
});
const categories = ["Breakfast", "Lunch", "Dinner", "Snack"]; // Example categories

const defaultValues = {
  recipeName: "",
  recipeDetails: "",
  country: "",
  category: "",
  recipeImage: "",
  youtubeVideo: "",
};

const AddRecipe = () => {
  const [createRecipe] = useCreateRecipeMutation(undefined);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(recipeSchema),
    defaultValues,
  });
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  // onsubmit handle
  const onSubmit = async (data: any) => {
    const { recipeImage, ...rest } = data;

    //image upload logic
    try {
      if (!recipeImage || recipeImage.length === 0) {
        throw new Error("No image file selected");
      }

      const formData = new FormData();
      formData.append("image", recipeImage[0]);

      // send request to imgbb
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=02a3841228fa403ad984e43f8410ddd5`,
        {
          method: "POST",
          body: formData,
        }
      );

      const imgbbRes = await response.json();

      if (!imgbbRes.success) {
        throw new Error(imgbbRes.error.message || "Image upload failed");
      }

      const imageUrl = imgbbRes.data.display_url;

      //recipe data
      const recipeData = {
        ...rest,
        recipeImage: imageUrl,
        creatorEmail: "john@example.com",
        watchCount: 0,
        purchased_by: [],
        reaction: [],
      };

      // create recipe data here
      const res = await createRecipe(recipeData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.error?.message);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" textAlign="center" py={2}>
        Add Recipe
      </Typography>
      <Box sx={{ padding: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              {/* recipe name */}
              <Controller
                name="recipeName"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Recipe Name"
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!error?.message}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            {/* recipe image */}
            <Grid item xs={12} sm={6}>
              <Controller
                name="recipeImage"
                control={control}
                render={({ field }) => (
                  <>
                    <Button variant="contained" fullWidth component="label">
                      {selectedFileName
                        ? selectedFileName
                        : "Upload Recipe Image"}
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files && e.target.files.length > 0) {
                            setSelectedFileName(e.target.files[0].name);
                            field.onChange(e.target.files);
                          }
                        }}
                      />
                    </Button>
                    {errors.recipeImage && (
                      <p style={{ color: "red" }}>
                        {errors.recipeImage.message as React.ReactNode}
                      </p>
                    )}
                  </>
                )}
              />
            </Grid>

            {/* youtube video */}
            <Grid item xs={12}>
              <Controller
                name="youtubeVideo"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="YouTube Video Code"
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!error?.message}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            {/* country  */}
            <Grid item xs={12} sm={6}>
              <Controller
                name="country"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Country"
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!error?.message}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            {/* category */}
            <Grid item xs={12} sm={6}>
              <Controller
                name="category"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    select
                    label="Category"
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!error?.message}
                    helperText={error?.message}
                  >
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>
            {/* recipe details */}
            <Grid item xs={12}>
              <Controller
                name="recipeDetails"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Recipe Details"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    error={!!error?.message}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sx={{textAlign: "center"}}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default AddRecipe;
