"use client";

import { Icon } from "@/styles/style";
import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import CategoryWrapper from "../category/CategoryWrapper";

const StartWrapper = tw.div`
  h-[90%]
  w-[4.75rem]
  border-r-[1.5px]
  border-r-[#919191]
  mr-[2px]
`;

const StartButton = tw.button`
  flex
  bg-[#C0C0C0]
  items-center
  h-full
  w-[4.5rem]
  space-x-1
  border-[2px]
  p-1
  border-b-black
  border-r-black
`;

const Text = tw.span`
  text-black  
  font-bold
`;

const SortBar = tw.div`
  h-4/5
  w-[3.5px]
  rounded-xl
  bg-[#D0D0D0]
  shadow-xl
  border
  border-r-[#919191]
  border-b-[#919191]
`;

const ShortCutWrapper = tw.div`
  h-[90%]
  border-r-[1.5px]
  border-r-[#919191]
  mr-[2px]
  w-20
`;

const FooterNavContent = () => {
  const [visible, setVisible] = useState(false);

  const handleStartButton = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <CategoryWrapper visible={visible} />
      <StartWrapper>
        <StartButton onClick={handleStartButton}>
          <Icon src="images/window_icon.png" />
          <Text>시작</Text>
        </StartButton>
      </StartWrapper>
      <SortBar />
      <ShortCutWrapper></ShortCutWrapper>
      <SortBar />
    </>
  );
};

export default FooterNavContent;
