import React from 'react';

type ButtonProps = React.PropsWithChildren<{
  type?: React.ComponentProps<'button'>['type'];
  onClick?: () => void;
  className?: React.ComponentProps<'button'>['className'];
}>;

export default function Button({
  type,
  onClick,
  children,
  className,
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
