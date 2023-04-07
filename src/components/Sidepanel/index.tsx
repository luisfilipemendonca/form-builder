import { FC, ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  SidepanelBackButton,
  SidepanelBackButtonContainer,
  SidepanelBackdrop,
  SidepanelContainer,
  SidepanelContent,
} from './styled';

interface SidepanelProps {
  isOpen: boolean;
  content: ReactNode;
  onCloseHandler: () => void;
}

const Sidepanel: FC<SidepanelProps> = ({ isOpen, content, onCloseHandler }) => {
  const sidepanelRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      timeout={500}
      in={isOpen}
      mountOnEnter
      unmountOnExit
      nodeRef={sidepanelRef}
      classNames="sidepanel"
    >
      <SidepanelContainer ref={sidepanelRef}>
        <SidepanelBackdrop onClick={onCloseHandler} />
        <SidepanelContent>
          <SidepanelBackButtonContainer>
            <SidepanelBackButton onClick={onCloseHandler}>
              Fechar
            </SidepanelBackButton>
          </SidepanelBackButtonContainer>
          {content}
        </SidepanelContent>
      </SidepanelContainer>
    </CSSTransition>
  );
};

export default Sidepanel;
