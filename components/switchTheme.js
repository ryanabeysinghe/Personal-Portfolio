import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const switchTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const iconColor = {
        light: "black",
        dark: "white"
    };

    return (
        <IconButton
            aria-label= {colorMode !== "dark" ? "Toggle light mode" : "Toggle dark mode"}
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            color={iconColor[colorMode]}
        />
    );
}; 

export default switchTheme;