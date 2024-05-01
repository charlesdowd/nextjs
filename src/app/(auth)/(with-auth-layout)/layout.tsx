import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode
}

export default function AuthLayout({ children }: IProps) {
  return (
    <>
      <h2>Inner Layout</h2>
      {children}
    </>
  )
}
