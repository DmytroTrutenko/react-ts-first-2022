import React from "react";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
  return (
    <>
      <h1>Modal</h1>
      {props.children}
    </>
  );
};
