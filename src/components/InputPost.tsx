import { Box, Button, HStack, Input, Stack, Textarea } from "@chakra-ui/react";
import { useState } from "react";

interface InputPostProps {
    onSubmit: Function;
}

export const InputPost = ({ onSubmit }: InputPostProps) => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [disabledItens, setDisabledItens] = useState<boolean>(false)

    const handleSubmit = async () => {
        if (title.trim() && content.trim()) {
            setDisabledItens(true)

            const result = await onSubmit({ title, content })

            if (result) {
                setTitle("");
                setContent("");
            }
            setDisabledItens(false)
        }
    };

    return (
        <Box
            position="fixed"
            bottom="0"
            left="0"
            width="100vw"
            bg="white"
            p={4}
            boxShadow="md"
        >
            <HStack gap={2} align="stretch">
                <Stack gap={2} flex="1">
                    <Input
                        disabled={disabledItens}
                        bg="white"
                        color="black"
                        placeholder="Título do post"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Textarea
                        disabled={disabledItens}
                        bg="white"
                        color="black"
                        size="sm"
                        placeholder="Escreva algo..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Stack>

                <Button
                    disabled={disabledItens}
                    flexShrink={0}
                    onClick={handleSubmit}>Enviar</Button>
            </HStack>
        </Box>
    );
};
