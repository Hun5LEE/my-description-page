import tw from "tailwind-styled-components";

const NavigationMenuWrapper = tw.div`
  w-[220px]
  h-[400px]
  border-[2px]
  border-r-[1.5px]
  border-r-[black]
  border-b-[1.5px]
  border-b-[black]
  bg-[#C0C0C0]
`;

const NavigationMenuSide = tw.div`
  h-full
  w-[15%]
  bg-[#00017F]
  rotate-180
  pt-3
`;

const NavigationName = tw.div`
  text-white
  text-xl
  rotate-[90deg]
`;

const CategoryWrapper = () => {
  return (
    <NavigationMenuWrapper>
      <NavigationMenuSide>
        <NavigationName>Hun5LEE(97)</NavigationName>
      </NavigationMenuSide>
    </NavigationMenuWrapper>
  );
};

export default CategoryWrapper;
