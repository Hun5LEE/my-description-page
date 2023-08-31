import { Icon } from "@/styles/style";
import tw from "tailwind-styled-components";

const StartWrapper = tw.div`
  h-full
  w-[4.75rem]
  border-r-[1.5px]
  border-r-[#919191]
  mr-[2px]
`;

const StartButton = tw.button`
  flex
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
  font-normal
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
  h-full
  border-r-[1.5px]
  border-r-[#919191]
  mr-[2px]
  w-20
`;

const FooterNavContent = () => {
  return (
    <>
      <StartWrapper>
        <StartButton>
          <Icon src="images/window_icon.png" width={24} height={100} />
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
