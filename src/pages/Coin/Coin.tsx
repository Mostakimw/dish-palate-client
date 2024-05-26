import { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../lib/Provider/AuthProviders";
import { usePurchaseCoinMutation } from "../../redux/api/allApi";
import Swal from "sweetalert2";
import { toast } from "sonner";

const Coin = () => {
  const navigate = useNavigate();
  const [updateUserCoin] = usePurchaseCoinMutation(undefined);
  const { user } = useContext(AuthContext);

  const handlePurchase = async (coins: number, cost: number) => {
    const result = await Swal.fire({
      title: "Confirm Purchase",
      text: `Do you want to buy ${coins} coins for $${cost}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    });
    if (result.isConfirmed) {
      try {
        // updating coin for user data
        const res = await updateUserCoin({
          userEmail: user?.email,
          boughtCoins: coins,
        }).unwrap();
        if (res?.success) {
          toast.success(res.message);
          navigate("/recipes");
        }
      } catch (error) {
        console.error("Error purchasing coins:", error);
      }
    }
  };

  return (
    <Container sx={{ marginTop: 8 }}>
      <Typography variant="h4" textAlign="center" py={2}>
        Purchase Coin
      </Typography>
      <Box
        display="flex"
        maxWidth={600}
        margin="0 auto"
        justifyContent="space-around"
        mt={4}
      >
        {/* purchasing 100 coins */}
        <Card sx={{ maxWidth: 300 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              100 Coins
            </Typography>
            <Typography variant="body1" gutterBottom>
              Price: $1
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ marginTop: 1 }}
              onClick={() => handlePurchase(100, 1)}
            >
              Purchase
            </Button>
          </CardContent>
        </Card>

        {/* purchasing 500 coins */}
        <Card sx={{ maxWidth: 300 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              500 Coins
            </Typography>
            <Typography variant="body1" gutterBottom>
              Price: $5
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ marginTop: 1 }}
              onClick={() => handlePurchase(500, 5)}
            >
              Purchase
            </Button>
          </CardContent>
        </Card>

        {/* purchasing 1000 coins */}
        <Card sx={{ maxWidth: 300 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              1000 Coins
            </Typography>
            <Typography variant="body1" gutterBottom>
              Price: $10
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ marginTop: 1 }}
              onClick={() => handlePurchase(1000, 10)}
            >
              Purchase
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Coin;
