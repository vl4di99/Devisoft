import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import logo from "../images/Devisoft_Title_Transparent.png";
import {
	MainDiv,
	NavbarListLI,
	NavbarListUL,
	SecondaryDiv,
} from "./TailwindSC/Styled";
import { ThemeContext } from "./Context";

const Header = () => {
	const { darkMode, emoji, changeTheme } = useContext(ThemeContext);
	return (
		<MainDiv dark={darkMode}>
			<SecondaryDiv>
				<Image src={logo} alt="LOGO" width={200} height={200} />
			</SecondaryDiv>

			<SecondaryDiv>
				<SecondaryDiv>
					<NavbarListUL>
						<NavbarListLI>About</NavbarListLI>
						<NavbarListLI>Contact</NavbarListLI>
					</NavbarListUL>
				</SecondaryDiv>
				<SecondaryDiv className="flex self-end">
					<button onClick={changeTheme} className="cursor-pointer">
						{emoji}
					</button>
				</SecondaryDiv>
			</SecondaryDiv>
		</MainDiv>
	);
};

export default Header;
