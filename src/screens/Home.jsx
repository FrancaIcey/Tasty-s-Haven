import { Divider } from "@mui/material";
import ScreensHead from "../component/screensHeader/ScreensHead";
import { useEffect, useState } from "react";
import Buttons from "../component/Buttons/Buttons";
import Cards from "../component/Card/Card";
import Footer from "../component/Footer/Footer";
import Swipper from "../features/Swip";
import ReservationTable from "../component/ReservationTable/ReservationTable";
import { Link } from "react-router-dom";
import { doc, setDoc } from "@firebase/firestore";

// Imported images
// import image1 from "../assets/WhatsApp Image 2024-01-17 at 14.21.27_e12ef601.jpg";
// import image2 from "../assets/WhatsApp Image 2024-01-17 at 14.21.28_1e28c956.jpg";
// import image3 from "../assets/WhatsApp Image 2024-01-17 at 14.21.28_7b4b1bbb.jpg";
// import image4 from "../assets/WhatsApp Image 2024-01-17 at 14.21.29_48a6297a.jpg";
import ContactMap from "../component/Contact&Map/Contact&Map";

// Imported ID's
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../fireBase/FireBase";
import { selectFoodData } from "../manager/Slices/FoodDataSlice";

function Home() {
  //

  const allFoodData = useSelector(selectFoodData);

  // Names For Values Using useState
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [person, setPerson] = useState("");
  const [date, setDate] = useState("");

  // console.log("Onchange", name);

  // Sending Data to FireBase
  const handleDataBase = async () => {
    try {
      // alert("Clks");
      if (
        name.length !== 0 &&
        phone.length !== 0 &&
        person.length !== 0 &&
        date.length !== 0
      ) {
        // ID's
        const uuid = uuidv4();
        // alert(uuid);
        await setDoc(doc(db, `USERS_DataBase`, uuid), {
          userName: name,
          UserPhoneNumber: phone,
          UserPersons: person,
          UserDate: date,

          accountId: uuid,
        });
        setName("");
        setPhone("");
        setPerson("");
        setDate("");
      } else {
        alert("All field require ");
      }
    } catch (error) {
      alert("Error");
      console.error(error);
    }
  };

  return (
    <>
      <div className="body">
        {/* GRIDING SYSTEM */}
        <div className="gridBody">
          {/* GRIDING COMPONENTS */}

          {/* Contain the page header */}
          <div
            className="firstGrid"
            style={{
              display: "flex",
            }}
          >
            <ScreensHead
              Home={"HOME"}
              Menu={"MENU"}
              About={"ABOUT"}
              Contact={"CONTACT"}
              Tasty={"Tasty's"}
              Haven={"Haven"}
              MakeReservation={"MAKE RESERVATION"}
            />
          </div>
          {/* End of page header */}
          <div className="secondGrid" style={{ overflow: "hidden" }}>
            <Swipper />
          </div>
          <div
            className="thirdGrid"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* Flex */}
            <div
              style={{
                flex: ".23",
                // background: "red",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  flex: ".2",
                  // background: "yellow",
                  // textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                id="about"
              >
                <small style={{ paddingTop: "5%", color: "white" }}>
                  ABOUT US
                </small>
              </div>
              <div
                style={{
                  flex: ".6",
                  // background: "blue",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "30px",
                    color: "white",
                  }}
                >
                  Welcome to Tasty's Haven, your haven for exquisite. Tasty's Haven is not just <br />another restaurant; it's an extraordinary dining experience.

<br />Our diverse menu is a celebration of culinary craftsmanship, <br />offering a tantalizing array of dishes <br /> that showcase the finest ingredients and culinary creativity. <br /> We take pride in presenting an extensive selection of mouthwatering options <br /> to satisfy every palate.

At Tastys Haven, we are committed to delivering <br />an unparalleled dining experience, <br /> where each dish is a masterpiece crafted with passion and precision. <br />Join us on a culinary journey that transcends the ordinary, <br />and discover a haven of flavors at Tastys Haven.
                </div>
              </div>
              {/* Divider */}
              <div
                style={{
                  flex: ".2",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Divider
                  sx={{ width: "2px", height: "15vh", background: "rgb" }}
                />
              </div>
            </div>
            <div
              style={{
                flex: ".23",
                // background: "cyan",
                display: "flex",
                flexDirection: "column",
              }}
              id="menu"
            >
              {/* Menu, list & BTN */}
              <div
                style={{
                  flex: ".30",
                  // background: "yellow",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "center",
                  color: "white",
                  gap: "1.5em",
                }}
              >
                <div style={{ fontSize: "3em" }}>MENU</div>
                <small>
                  Taste the versatility and deliciousness of meals in all their
                  forms
                </small>
                <Link
                  to="/OurMenu"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Buttons NameBtn={"Full Menu"} width={"20%"} />
                </Link>
              </div>
              {/* Cards */}
              <div
                style={{
                  flex: ".70",
                  // background: "blue",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1em",
                }}
              >
                {allFoodData.slice(0, 4).map((data, index) => {
                  const { strMealThumb, strMeal } = data;

                  return (
                    <>
                      <Cards
                        key={index}
                        src={strMealThumb}
                        dishName={strMeal}
                      />
                    </>
                  );
                })}
              </div>
            </div>
            {/* End Of Flex */}
            <div
              style={{
                flex: ".54",
                // background: "peru",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Flex */}
              <div
                style={{
                  flex: ".4",
                  // background: "pink",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    flex: ".1",
                    // background: "white",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  {/* Divider */}
                  <Divider
                    sx={{ width: "2px", height: "15vh", background: "wheat" }}
                  />
                </div>
                {/* location area */}
                <div
                  style={{
                    flex: ".15",
                    // background: "blue",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "white",
                    gap: "1em",
                  }}
                >
                  <div style={{ fontSize: "60px" }}>LOCATION</div>
                  <small>Where you can find us</small>
                </div>
                {/* Map area */}
                <div
                  style={{
                    flex: ".75",
                    // background: "yellow",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <ContactMap />
                </div>
              </div>
              <div
                style={{
                  flex: ".6",
                  // background: "green",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ReservationTable
                  // Sender
                  handleClick={() => {
                    handleDataBase();
                  }}
                  // Placeholders
                  anotherPlaceholder={"Fullname"}
                  placeholderNumber={"Number of persons"}
                  placeholderPhone={"Phone Number"}
                  // values
                  valueName={name}
                  valuePhone={phone}
                  valuePerson={person}
                  //Event
                  changeName={(event) => {
                    setName(event.target.value);
                  }}
                  changePhone={(event) => {
                    setPhone(event.target.value);
                  }}
                  changePerson={(event) => {
                    setPerson(event.target.value);
                  }}
                  defaultValue={date}
                  dateValue={(e) => {
                    setDate(
                      e.$d.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    );
                  }}
                />
              </div>
              {/* End Of Flex */}
            </div>
          </div>
          <div className="fourthGrid">
            <Footer />
          </div>
          {/* END OF GRIDING COMPONENTS */}
        </div>
        {/* END OF GRIDING SYSTEM */}
      </div>
    </>
  );
}

export default Home;