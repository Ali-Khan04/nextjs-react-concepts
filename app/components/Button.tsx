import React from 'react';

type ButtonProps = React.PropsWithChildren<{
  type?: React.ComponentProps<'button'>['type'];
  onClick?: () => void;
}>;

export default function Button({ type, onClick, children }: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}
