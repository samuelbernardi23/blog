import { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Stack,
    Heading,
    Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { login } from "../repositories/auth.repository ";
import toast from "react-hot-toast";

export function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleLogin = async () => {

        if (email.trim() != '' && password.trim() != null) {
            try {
                await login({ email, password })
                navigate("/");
                toast.success("Seja bem-vindo")
            } catch (error) {

            }

        } else {
            toast.error("É necessário informar e-mail e senha.");
        }
    };

    const handleRegister = () => {
        navigate("/register");
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bg="gray.100"
        >
            <Card.Root width="400px" boxShadow="lg">
                <CardHeader>
                    <Heading as="h1" size="lg" textAlign="center">
                        TopCon Blog
                    </Heading>
                </CardHeader>

                <CardBody>
                    <Stack gap={4}>
                        <Box>
                            <Text>Email</Text>
                            <Input
                                type="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Box>

                        <Box>
                            <Text>Senha</Text>
                            <Input
                                type="password"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Box>

                        <Button colorScheme="blue" onClick={(e) => handleLogin()}>
                            Conectar
                        </Button>

                        <Button variant="outline" colorScheme="teal" onClick={handleRegister}>
                            Registrar
                        </Button>
                    </Stack>
                </CardBody>
            </Card.Root>
        </Box>
    );
};

export default LoginPage;
