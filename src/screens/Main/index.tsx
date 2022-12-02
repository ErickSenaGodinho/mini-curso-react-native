import { useState } from "react";
import { Button } from "../../components/Button";
import { Countries } from "../../components/Countries";
import { GroupsModal } from "../../components/GroupModal";
import { Header } from "../../components/Header";
import { Squad } from "../../components/Squad";
import { countries } from "../../mocks/countries";
import { Container, CountriesContainer, Footer, FooterContainer, SquadContainer } from "./styles";

export function Main() {

    const [selectedCountry, setSeletedCountry] = useState(countries[0]._id);
    const [selectedGroup, setSelectedGroup] = useState('G');
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Container>
                <Header selectedGroup={selectedGroup} />
                <CountriesContainer>
                    <Countries country={selectedCountry} select={setSeletedCountry} />
                </CountriesContainer>

                <SquadContainer>
                    <Squad selectedCountry={selectedCountry} selectedGroup={selectedGroup} />
                </SquadContainer>
            </Container>
            <Footer>
                <FooterContainer>
                    <Button title="Ver outro grupo" onPress={() => setIsModalOpen(true)} />
                </FooterContainer>
            </Footer>
            <GroupsModal visible={isModalOpen} onClose={() => setIsModalOpen(false)} group={selectedGroup} setGroup={setSelectedGroup} />
        </>
    )
}