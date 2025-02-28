import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

interface NavBarProps {
    onExit: Function
}
export const Navbar = ({ onExit }: NavBarProps) => {
    const role = Cookies.get("Role")
    const navigate = useNavigate();
    return (
        <Box
            as="nav"
            bg="white"
            boxShadow="md"
            position="fixed"
            top="0"
            left="0"
            width="100%"
            zIndex="100"
        >
            <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
                <Flex flex="1" justify="center">
                    <Text margin={2} fontSize="xl" fontWeight="bold" color="black">
                        TopCon Blog
                    </Text>
                </Flex>
                <Button variant={'ghost'} hidden={role == ''} onClick={() => navigate('/users')}>Users</Button>
                <Button variant={'ghost'} onClick={() => navigate('/')}>Home</Button>
                <Button variant={'ghost'} onClick={() => onExit()}>Sair</Button>
            </Flex>
        </Box>
    );
};

export default Navbar;
