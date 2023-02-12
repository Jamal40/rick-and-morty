import Character from "../types/Character";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardActions, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/favourites";
import { RootState } from "../redux/store";

const CharacterCard = ({ character }: { character: Character }) => {
  const favourites = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();
  const addToFavourites = () => {
    dispatch(add(character));
  };
  const removeFromFavourites = () => {
    dispatch(remove(character.id));
  };
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        sx={{ height: 345 }}
        image={character.image}
        title={character.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {character.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Species: {character.species}
        </Typography>
      </CardContent>

      <CardActions>
        {favourites.some((c) => c.id === character.id) ? (
          <IconButton
            onClick={removeFromFavourites}
            aria-label="remove from favorites"
            size="large"
          >
            <DeleteIcon color="error" />
          </IconButton>
        ) : (
          <IconButton
            onClick={addToFavourites}
            aria-label="add to favorites"
            size="large"
          >
            <FavoriteIcon color="error" />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

export default CharacterCard;
