import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";

const BackButton = () => {
  return (
    <Link href="/search">
    
    <Btn>
      <ButtonImage src="https://img.icons8.com/ios-filled/50/000000/left.png" />
    </Btn>
    </Link>
  );
};

export default BackButton;

const Btn = tw.button`
  rounded-full absolute top-4 left-6 z-10 cursor-pointer bg-white shadow-md
`;
const ButtonImage = tw.img`

`;
