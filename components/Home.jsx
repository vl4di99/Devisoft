//libraries imports
import React, { useContext} from "react";
import tw from "tailwind-styled-components"
import logo from "../images/Devisoft_Title_Transparent.png";

//components imports
import { ThemeContext } from "./Context";
import { lightPalette, darkPalette } from "../components/TailwindSC/Colors";
import Image from "next/image";

const Home = () => {
	const { darkMode, emoji, changeTheme } = useContext(ThemeContext);

	return (
			<HomeDiv dark={darkMode}>
                <Title>
                    Welcome to<Title2>DEVISOFT!</Title2>
                </Title>

                <Description>
                   We build together.
                   </Description><Description>
                   We grow together.
                     </Description><Description>
                   We succeed together.
                </Description>
                <Footer></Footer>
            </HomeDiv>
		
	);
};

export default Home;

const HomeDiv = tw.div`
   flex flex-col justify-center mx-4 rounded-3xl p-2 px-4 my-2 min-h-screen items-center
   ${(p) => (p.dark ? darkPalette.darkGray : lightPalette.lightGray)}
`;

const Title = tw.div`
  flex items-center justify-center font-sans text-5xl  text-yellow-800 p-5
`; 
const Title2 = tw.span`
  flex items-center justify-center font-sans text-5xl  text-yellow-900 p-5 hover:font-bold
`; 

const Description = tw.div`
  flex justify-center font-sans text-xl text-black-300 text-center hover:text-sky-300 p-2
  hover:font-bold

`;

const Footer = tw.div`
  flex justify-center font-sans text-xl text-black-300 text-center hover:text-sky-300 p-2
  hover:font-bold

`;