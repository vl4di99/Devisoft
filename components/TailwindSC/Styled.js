import tw from "tailwind-styled-components";
import { lightPalette, darkPalette } from "./Colors";

export const Container = tw.div`
flex flex-col min-h-screen w-screen bg-orange-50
`;

export const MainDiv = tw.div`
   flex justify-between mx-4 rounded-3xl p-2 px-4 my-2
   ${(p) => (p.dark ? darkPalette.darkGray : lightPalette.lightGray)}
`;



export const SecondaryDiv = tw.div`
   w-fit flex items-center
`;

export const NavbarListUL = tw.ul`
   flex flex-row justify-between items-center
`;

export const NavbarListLI = tw.li`
   flex flex-row justify-between items-center
   mx-5 bg-slate-100
`;

