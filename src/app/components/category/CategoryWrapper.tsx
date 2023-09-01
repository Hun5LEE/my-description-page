import tw from "tailwind-styled-components";
import Categories from "./Categories";

const NavigationMenuWrapper = tw.div`
  flex
  absolute
  z-[-1]
  w-[220px]
  h-[400px]
  border-[2px]
  border-r-[1.5px]
  border-r-[black]
  border-b-[1.5px]
  border-b-[black]
  bg-[#C0C0C0]
  transition-all
  duration-300
`;

const NavigationMenuSide = tw.div`
  h-full
  w-[15%]
  bg-[#00017F]
  rotate-180
  pt-1
`;

const NavigationName = tw.div`
  text-white
  text-2xl
  rotate-[90deg]
`;

interface ICategoryWrapperProps {
  visible: boolean;
}

const CategoryWrapper = ({ visible }: ICategoryWrapperProps) => {
  return (
    <NavigationMenuWrapper
      className={
        visible ? "bottom-7 opacity-100" : "bottom-[-400px] opacity-50"
      }
    >
      <NavigationMenuSide>
        <NavigationName>Hun5LEE(97)</NavigationName>
      </NavigationMenuSide>
      <Categories />
    </NavigationMenuWrapper>
  );
};

export default CategoryWrapper;
