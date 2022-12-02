import { ImageBackground, Modal } from "react-native";
import background from "../../assets/images/background.png";
import { Text } from "../Text";
import { Button, Container, Subtitle, Title } from "./styles";

interface GroupsModalProps {
    visible: boolean;
    onClose: () => void;
    group: string;
    setGroup: (group: string) => void;
}

export function GroupsModal({ visible, onClose, group, setGroup }: GroupsModalProps) {
    return (
        <Modal visible={visible} animationType="slide">
            <Container>
                <ImageBackground source={background} resizeMode="contain" style={{ flex: 1, justifyContent: "center" }} >
                    <Title>FIFA WORLD CUP</Title>
                    <Subtitle>Qatar 2022</Subtitle>

                    <Button onPress={() => { setGroup("A"); onClose() }} >
                        <Text size={20} weight={group !== "A" ? '500' : '600'} color="#6B0524" style={{ textTransform: 'uppercase' }}>Grupo A</Text>
                    </Button>
                </ImageBackground>
            </Container>
        </Modal>
    )
}
