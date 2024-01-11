import { Divider } from "@mui/material";
import ScreensHead from "../component/screensHeader/ScreensHead";
import Swip from "../features/Swip";

function Home() {
  return (
    <>
      <div className="body">
        {/* GRIDING SYSTEM */}
        <div className="gridBody">
          {/* GRIDING COMPONENTS */}

          {/* Contain the page header */}
          <div className="firstGrid" style={{ display: "flex" }}>
            <ScreensHead
              Home={"Home"}
              Menu={"Menu"}
              About={"About"}
              Contact={"Contact"}
              Tasty={"Tasty's"}
              Haven={"Haven"}
              MakeReservation={"Make Reservation"}
            />
          </div>
          {/* End of page header */}
          <div className="secondGrid">
            <Swip />
          </div>
          <div
            className="thirdGrid"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                flex: ".40",
                background: "red",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  flex: ".2",
                  background: "yellow",
                  // textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <small style={{ paddingTop: "5%" }}>ABOUT US</small>
              </div>
              <div
                style={{
                  flex: ".6",
                  background: "blue",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "30px",
                  }}
                >
                  WE ARE A NEW YORK'S PREMIER EGGS SPECIALTY <br /> RESTAURANT
                  FOUNDED BY JACK BLOOM. WE HAVE A <br /> DEDICATED MENU
                  SHOWCASING THE VERSATILITY AND <br /> DELICIOUSNESS OF EGGS IN
                  ALL THEIR FORMS, FROM <br /> CLASSIC OMELETTES AND EGG
                  SANDWICHES TO MORE <br /> UNIQUE CREATIONS LIKE OUR EGG AND
                  AVOCADO TOAST OR <br /> OUR SMOKED SALMON AND SCRAMBLED EGGS
                </div>
              </div>
              <div
                style={{
                  flex: ".2",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Divider
                  sx={{ width: "2px", height: "15vh", background: "white" }}
                />
              </div>
            </div>
            <div style={{ flex: ".40", background: "cyan" }}></div>
            <div style={{ flex: ".20", background: "red" }}></div>
          </div>
          <div className="fourthGrid"></div>
          {/* END OF GRIDING COMPONENTS */}
        </div>
        {/* END OF GRIDING SYSTEM */}
      </div>
    </>
  );
}

export default Home;
