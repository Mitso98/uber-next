import React, { useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";

const Search = () => {
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");

  return (
    <Wrapper>
      <Header>
        <Link href="/">
          <BackButton>
            <ButtonImage src="https://img.icons8.com/ios-filled/50/000000/left.png" />
          </BackButton>
        </Link>
      </Header>
      <InputBoxesContainer>
        <FormIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FormIcons>
        <FormInputs>
          <Input
            placeholder="Input1"
            value={pickUp}
            onChange={(e) => setPickUp(e.target.value)}
          />
          <Input
            placeholder="Input2"
            value={dropOff}
            onChange={(e) => setDropOff(e.target.value)}
          />
        </FormInputs>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputBoxesContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        <strong>Saved Places</strong>
      </SavedPlaces>
      <Link
        href={{
          pathname: "/confirm",
          query: { pickUp: pickUp, dropOff: dropOff },
        }}
      >
        <ConfirmLocation>Confirm Location</ConfirmLocation>
      </Link>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen px-2
`;

const Header = tw.header`
    bg-white
`;
const BackButton = tw.button`
   
`;
const ButtonImage = tw.img`
  curssor-pointer
`;
const InputBoxesContainer = tw.div`
    bg-white flex items-center px-4 mb-2
`;
const FormIcons = tw.div`
    w-10 flex flex-col mr-2 items-center
`;
const Circle = tw.img`
    h-2.5
`;
const Line = tw.img`
    h-10
`;
const Square = tw.img`
    h-3
`;
const FormInputs = tw.div`
    flex flex-col flex-1
`;
const Input = tw.input`
    bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`;
const PlusIcon = tw.img`
 w-10 h-10 bg-gray-200 rounded-full ml-3
`;
const SavedPlaces = tw.div`
    bg-white flex items-center px-4 py-2
`;
const StarIcon = tw.img`
    bg-gray-400 w-10 h-10 p-2  rounded-full mr-2
`;
const ConfirmLocation = tw.button`
 bg-black text-white w-full h-10 my-2 text-2xl
`;
