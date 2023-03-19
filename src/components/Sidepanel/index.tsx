import {
  SidepanelBackdrop,
  SidepanelContainer,
  SidepanelContent,
} from './styled';

const Sidepanel = () => {
  return (
    <SidepanelContainer>
      <SidepanelBackdrop />
      <SidepanelContent></SidepanelContent>
    </SidepanelContainer>
  );
};

export default Sidepanel;
