import React from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import Map from "./components/Map";
import Link from "next/link";

mapboxgl.accessToken =
  "pk.eyJ1IjoibW9zdGFmYTk5IiwiYSI6ImNreG02OHB3dTFiNzIycnFrZG1ueGFuancifQ.TJM0oZj3eSePsZPLOPiMpQ";

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <UberLogo src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" />
        <Profile>
          <Name>Mostafa Ahmed</Name>
          <UserImage src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" />
        </Profile>
      </Header>
      <Map />
      <ActionItems>
        <ActionButtons>
          <Link href="./search">
            <ActionButton>
              <ActionImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheel
          </ActionButton>
          <ActionButton>
            <ActionImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to go?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen px-2
`;

const ActionItems = tw.div`
  flex-1 

`;
const Header = tw.div`
  flex justify-between
`;
const UberLogo = tw.img`
  h-28 w-32
`;

const Profile = tw.div`
flex items-center
`;
const Name = tw.div`
mr-4 text-sm max-w-xs
`;
const UserImage = tw.img`
w-12 h-12 rounded-full border border-gray-200 
`;
const ActionButtons = tw.div`
 flex
`;
const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition  text-xl
`;
const ActionImage = tw.img`
 h-3/5
`;
const InputButton = tw.div`
  bg-gray-200 mx-1 mt-8 h-20 text-2xl p-4 flex items-center rounded-lg
`;
