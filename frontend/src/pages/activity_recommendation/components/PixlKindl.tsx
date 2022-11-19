import Box from "@mui/material/Box";
import pixlkindl from "../../../assets/MuenchnerKindlPicture.png";
import Button from "@mui/material/Button";

interface PixlKindlProps {
  direction?: "left" | "right";
  instruction: string;
  onInteraction: () => void;
}

const PixlKindl: React.FC<PixlKindlProps> = ({
  direction,
  instruction,
  onInteraction,
}) => {
  direction ??= "right";
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        flexDirection="column"
      >
        <Box
          width="40%"
          component="img"
          src={pixlkindl}
          sx={{
            transform: `scaleX(${direction === "left" ? -1 : 1})`,
          }}
        />
        <Box height={5} />
        <Button
          onClick={onInteraction}
          variant={direction === "left" ? "outlined" : "contained"}
        >
          {instruction}
        </Button>
      </Box>
    </Box>
  );
};
export default PixlKindl;
