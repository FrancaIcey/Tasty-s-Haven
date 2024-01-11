import Fab from "@mui/material/Fab";

function Buttons({ NameBtn, width }) {
  return (
    <>
      <Fab
        variant="extended"
        sx={{ height: "8vh", width: `${width}` }}
        size="large"
      >
        {NameBtn}
      </Fab>
    </>
  );
}

export default Buttons;
