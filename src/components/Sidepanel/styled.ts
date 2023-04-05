import styled from 'styled-components';

export const SidepanelBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const SidepanelContent = styled.div`
  background: #fff;
  width: 600px;
  position: absolute;
  right: -100%;
  top: 0;
  bottom: 0;
`;

export const SidepanelContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &.sidepanel-enter ${SidepanelBackdrop} {
    opacity: 0;
  }

  &.sidepanel-enter-active ${SidepanelBackdrop} {
    opacity: 1;
    transition: opacity 500ms;
  }

  &.sidepanel-enter-done ${SidepanelBackdrop} {
    opacity: 1;
  }

  &.sidepanel-exit ${SidepanelBackdrop} {
    opacity: 1;
  }

  &.sidepanel-exit-active ${SidepanelBackdrop} {
    opacity: 0;
    transition: opacity 500ms;
  }

  &.sidepanel-enter ${SidepanelContent} {
    right: -100%;
  }

  &.sidepanel-enter-active ${SidepanelContent} {
    right: 0;
    transition: right 500ms linear;
  }

  &.sidepanel-enter-done ${SidepanelContent} {
    right: 0;
  }

  &.sidepanel-exit ${SidepanelContent} {
    right: 0;
  }

  &.sidepanel-exit-active ${SidepanelContent} {
    right: -100%;
    transition: right 500ms linear;
  }
`;
