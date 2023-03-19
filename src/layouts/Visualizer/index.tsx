import { useState } from "react";
import FormCta from "../../containers/Visualizer/FormCta";
import { GridContainer, GridItem } from "../../styles";
import { FormContainer, VisualizerContainer, VisualizerCta, VisualizerHeader } from "./styled"

type Device = 'mobile' | 'tablet' | 'desktop';

const Visualizer = () => {
    const [visualizerDevice, setVisualizerDevice] = useState<Device>('desktop');

    const onDeviceChangeHandler = (device: Device) => {
        setVisualizerDevice(device);
    }

    return (
        <VisualizerContainer>
            <VisualizerHeader>
                <h1>Form Visualizer</h1>
                <VisualizerCta>
                    <button onClick={() => onDeviceChangeHandler('mobile')}>Mobile</button>
                    <button onClick={() => onDeviceChangeHandler('tablet')}>Tablet</button>
                    <button onClick={() => onDeviceChangeHandler('desktop')}>Desktop</button>
                </VisualizerCta>
            </VisualizerHeader>
            <FormContainer device={visualizerDevice}>
                <GridContainer>
                    <GridItem sm={3} md={12}>3</GridItem>
                    <GridItem sm={4}>4</GridItem>
                    <GridItem sm={2}>2</GridItem>
                    <GridItem sm={3}>3</GridItem>
                    <GridItem sm={12}>12</GridItem>
                </GridContainer>
                <FormCta />
            </FormContainer>
        </VisualizerContainer>
    )
}

export default Visualizer;
