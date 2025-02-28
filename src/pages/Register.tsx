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
import { register } from "../repositories/auth.repository ";
import toast from "react-hot-toast";

export function RegisterPage() {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleRegister = async () => {

        if (email.trim() != '' && password.trim() != '' && confirmPassword.trim() != '') {
            if (password.trim() != confirmPassword.trim()) {
                toast.error("As senhas não conferem.");
                return
            }
            try {
                await register({ username, email, password, confirmPassword })
                navigate("/");
                toast.success("Seja bem-vindo")
            } catch (error) {

            }
            return

        } else {
            toast.error("É necessário informar e-mail e senha.");


        }
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
                        Registrar acesso
                    </Heading>
                </CardHeader>

                <CardBody>
                    <Stack gap={4}>
                        <Box>
                            <Text>Seu nome</Text>
                            <Input
                                type="text"
                                placeholder="Nome"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Box>
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
                        <Box>
                            <Text>Confirme sua senha</Text>
                            <Input
                                type="password"
                                placeholder="Confirme sua senha"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Box>
                        <Button colorScheme="blue" onClick={(e) => handleRegister()}>
                            Registrar
                        </Button>
                        <Button variant="outline" className="w-full" onClick={() => handleLogin()}>
                            Voltar para Login
                        </Button>
                    </Stack>
                </CardBody>
            </Card.Root>
        </Box>
    );
};

export default RegisterPage;
