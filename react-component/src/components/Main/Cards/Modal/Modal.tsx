import React from 'react';
import ReactDom from 'react-dom';
import './Modal.css';

interface IModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}
export class Modal extends React.Component<IModalProps> {
  domNode: HTMLElement | null;
  element: HTMLDivElement;
  constructor(props: IModalProps) {
    super(props);
    this.domNode = document.getElementById('portal');
    this.element = document.createElement('div');
  }
  componentDidMount() {
    this.domNode?.appendChild(this.element);
  }
  componentWillUnmount() {
    this.domNode?.removeChild(this.element);
  }
  render() {
    return this.props.open ? 
       ReactDom.createPortal(this.props.children, this.element) : null    
  }
}
