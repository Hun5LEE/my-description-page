import { NextPage } from "next";
import tw from "tailwind-styled-components";
import FooterNavContent from "@/components/footer/FooterNavContent";
import CategoryWrapper from "@/components/category/CategoryWrapper";

const FooterNavWrapper = tw.footer`
  absolute
  bottom-0
  w-full
  h-8
  bg-[#C0C0C0]
  border-t-2
`;

const FooterNavBar = tw.nav`
  flex
  items-center
  h-[90%]
  m-[2px]
`;

const HomePage: NextPage = () => {
  return (
    <>
      <CategoryWrapper />
      <FooterNavWrapper>
        <FooterNavBar>
          <FooterNavContent />
        </FooterNavBar>
      </FooterNavWrapper>
    </>
  );
};

export default HomePage;
