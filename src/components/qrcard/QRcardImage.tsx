import React from "react";
import styled from "styled-components";
import qrcode from "../../assets/qrcode.png";
import { ThemeInterface } from "../../interfaces/theme/ThemeInterface";

const QRcardImage = () => {
    return (
        <ImageElement src ={qrcode} />
    );
};

const ImageElement = styled.img`
    // max-width: 100%;
    width: 16rem;
    height: 16rem;
    border-radius: ${({ theme }: { theme: ThemeInterface}) => theme.borderRadius};
`;

export default QRcardImage;