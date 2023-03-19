import styled from "styled-components";

interface Devices {
    mobile: string;
    tablet: string;
    desktop: string;
}

interface FormContainerProps {
    device: keyof Devices;
}

const devicesWidth: Devices = {
    mobile: '400px',
    tablet: '800px',
    desktop: '1200px'
}

export const VisualizerContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const VisualizerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
`;

export const VisualizerCta = styled.div`
    display: flex;
    align-items: center;

    & > * {
        margin-right: 10px;
    }
`;

export const FormContainer = styled.form<FormContainerProps>`
    width: 100%;
    max-width: ${({device}) => devicesWidth[device]};
    border: 2px solid #cbcbcb;
    padding: 20px;
`;