import { NextPage } from "next";
import tw from "tailwind-styled-components";
import FooterNavContent from "@/components/footer/FooterNavContent";

const FooterNavWrapper = tw.footer`
  fixed
  bottom-0
  w-full
  h-8
  bg-[#C0C0C0]
  border-t-2
`;

const FooterNavBar = tw.nav`
  flex
  items-center
  h-full
  mt-[2px]
  px-[2px]
  pb-[2px]
  bg-[#C0C0C0]
  z-9
`;

const HomePage: NextPage = () => {
  return (
    <FooterNavWrapper>
      <FooterNavBar>
        <FooterNavContent />
      </FooterNavBar>
    </FooterNavWrapper>
  );
};

export default HomePage;
