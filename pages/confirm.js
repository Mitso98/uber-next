import React from "react";
import Map from "./components/Map";
import tw from "tailwind-styled-components";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { carList } from "../assets/carList";
import BackButton from "./components/BackButton";
const Confirm = () => {
  const [dropoff, setdropoff] = useState();
  const [pickup, setpickup] = useState();
  const [distant, setdistant] = useState();
  const router = useRouter();

  const distance = (lat1, lon1, lat2, lon2, unit) => {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "M") {
      dist = dist * 0.8684;
    }
    return dist;
  };

  const getCoordinates = () => {
    const location = router.query;
    console.log(location);
    for (const key in location) {
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${location[key]}.json?` +
          new URLSearchParams({
            access_token:
              "pk.eyJ1IjoibW9zdGFmYTk5IiwiYSI6ImNreG02OHB3dTFiNzIycnFrZG1ueGFuancifQ.TJM0oZj3eSePsZPLOPiMpQ",
            limit: 1,
          })
      )
        .then((response) => response.json())
        .then((data) =>
          key == "pickUp"
            ? setpickup(data.features[0].center)
            : setdropoff(data.features[0].center)
        )
        .then(() => {
          if (pickup && dropoff) {
            console.log(distant, "again");

            setdistant(
              distance(pickup[0], pickup[1], dropoff[0], dropoff[1], "K")
            );

            console.log(distant);
          }
        });
    }
  };

  useEffect(() => {
    if (distant) return;
    getCoordinates();
  }, [pickup, dropoff]);
  return (
    <Wrapper>
      <BackButton />
      <Map pickup={pickup} dropoff={dropoff} />
      <Section>
        <Title>Choose a ride or swip up for more</Title>
        <RidesList className="no-scrollbar">
          {carList.map((car) => {
            return (
              <RideCard key={car.id}>
                <CardLeft>
                  <CardMain>
                    <CarImage src={car.imgUrl} />
                  </CardMain>
                  <CardHead>
                    <CarTitle>{car.service}</CarTitle>
                    <Time>5 mins away</Time>
                  </CardHead>
                </CardLeft>
                <CardRight>
                  <Price>{`$${(distant * car.multiplier).toFixed(2)}`}</Price>
                </CardRight>
              </RideCard>
            );
          })}
        </RidesList>
        <ConfirmButton>Confirm</ConfirmButton>
      </Section>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
  flex flex-col h-screen mx-5 z-0
`;

const Section = tw.section`
  flex flex-col flex-1 h-1/2
`;
const Title = tw.p`
  text-sm text-center w-full text-gray-500
`;
const RidesList = tw.div`
  border-y border-gray-200 overflow-y-scroll
`;
const RideCard = tw.div`
flex  justify-between items-center shadow-lg my-5
`;
const CardLeft = tw.div`
  flex 
`;
const CardMain = tw.div`

`;
const CarImage = tw.img`
  w-20 h-20 mr-4 ml-4
`;
const CardHead = tw.div`
flex flex-col align-center justify-center text-center 
`;
const CarTitle = tw.div`
font-medium
`;
const Time = tw.p`
  text-blue-600 text-sm
`;
const CardRight = tw.div`
  mr-4
`;
const Price = tw.p`
  h-10 bg-red  text-center align-center font-medium 
`;
const ConfirmButton = tw.button`
   bg-black h-10 rounded text-white mb-3
`;
