import styled from "styled-components/native";

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS == 'android';

export const Container = styled.View`
    flex: 1;
    margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
    background-color: #fff;
`;

export const CountriesContainer = styled.View`
    height: 72px;
    margin-top: 32px;
`;

export const SquadContainer = styled.View`
    flex: 1;
    padding-bottom: 32px;
`;

export const Footer = styled.View`
    min-height: 88px;
`

export const FooterContainer = styled.View`
    margin: 0 24px;
`