import { countries } from "../../mocks/countries";
import { Text } from "../Text";
import { Container, Country, Flag } from "./styles";

interface CountriesProps {
    country: string;
    select: (country: string) => void;
};

export function Countries({ country, select }: CountriesProps) {

    function handleSelectCountry(countryId: string) {
        select(countryId);
    }

    return (
        <Container>
            {countries.map(item => (
                <Country key={item._id} onPress={() => handleSelectCountry(item._id)}>
                    <Flag source={item.flag} />
                    <Text size={14} weight="600" opacity={country == item._id ? 1 : 0.5}>{item.name}</Text>
                </Country>
            ))}
        </Container>
    )
}