import React, { FC, useEffect } from 'react';
import ReactDom from 'react-dom';
import './Modal.css';

interface IModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}
export const Modal: FC<IModalProps> = (props: IModalProps) => {
  const domNode = document.getElementById('portal');
  const element = document.createElement('div');
  useEffect(() => {
    domNode?.appendChild(element);
    return () => {
      domNode?.removeChild(element);
    };
  });

  return props.open ? ReactDom.createPortal(props.children, element) : null;
};
