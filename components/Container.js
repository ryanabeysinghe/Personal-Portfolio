import React from 'react';
import {
    useColorMode, 
    Button, 
    Flex, 
    Box
} from '@chakra-ui/react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import SwitchTheme from '../components/SwitchTheme';

const Container = ({ children }) => {

    const StickyNavbar = styled(Flex)`
        position: sticky;
        
    `

    return (
        <>
        Container
        <SwitchTheme />
        </>
    ); 
}

export default Container;