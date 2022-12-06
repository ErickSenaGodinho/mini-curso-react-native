import { Text } from "../Text";
import { Container } from "./styles";

interface ButtonProps {
    title?: string;
    onPress?: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
    return (
        <Container onPress={onPress} activeOpacity={.7}>
            <Text weight="500" color="#fff">{title}</Text>
        </Container>
    )
}