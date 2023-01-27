import React from "react";
import styled from "styled-components";
import { Row, Column } from "../../styles/layout/Flex";
import QRcardImage from "./QRcardImage";
import { ThemeInterface } from "../../interfaces/theme/ThemeInterface";

const QRcard = () => {
    return(
        <MainContainer>
            <Card>
                <QRcardImage />
                <p className = "header">Improve your front-end skills by building projects</p>
                <p className = "body">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>

            </Card>
        </MainContainer>
    );
};

const MainContainer =  styled(Row)`

width: 100%;

height: 100vh;

`

const Card = styled(Column)`

    width: 18rem;
    background: ${({ theme }: { theme:ThemeInterface }) => (theme.whiteColor)};
    height: 28rem;
    justify-content: flex-start;
    text-align: center;

    gap: 1rem;

    padding: 1rem;

    border-radius: ${({ theme }: { theme: ThemeInterface}) => theme.borderRadius};

    p.header{
        font-weight: ${({ theme }: { theme:ThemeInterface }) => (theme.heavyBold)};

        font-size: 1.25rem;

    }

    p.body{
        font-weight: ${({ theme }: { theme:ThemeInterface }) => (theme.lightBold)};

        font-size: ${({ theme }: { theme:ThemeInterface }) => (theme.bodyFont)};

        color: ${({ theme }: { theme:ThemeInterface }) => (theme.greyishBlueColor)};
    }

`;

export default QRcard;