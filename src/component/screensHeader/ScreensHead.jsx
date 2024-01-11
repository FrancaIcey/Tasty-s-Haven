import Buttons from "../Buttons/Buttons";

function ScreensHead({
  Home,
  Menu,
  About,
  Contact,
  Tasty,
  Haven,
  MakeReservation,
}) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        {/* Listed tabs for navigation names*/}
        <div
          style={{
            flex: ".35",
            // background: "peru",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // gap: "1em",
          }}
        >
          <ul
            className="list"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
              fontSize: "20px",
            }}
          >
            <li>{Home}</li>
            <li>{Menu}</li>
            <li>{About}</li>
            <li>{Contact}</li>
          </ul>
        </div>
        {/* End Of Listed tabs for navigation names*/}
        <div
          style={{
            flex: ".3",
            // background: "pink",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4 style={{ fontSize: "28px", fontWeight: "500" }}>
            {Tasty} <br /> {Haven}
          </h4>
        </div>
        <div
          style={{
            flex: ".35",
            // background: "yellow",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Buttons NameBtn={MakeReservation} width={"20vw"} />
        </div>
      </div>
    </>
  );
}

export default ScreensHead;
