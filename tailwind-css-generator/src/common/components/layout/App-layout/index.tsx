import * as React from 'react';
import { Header } from '../../ui/Nav';

export interface IAppLayoutProps {
    children:React.ReactNode
}

export default function AppLayout (props: IAppLayoutProps) {
  return (
    <div>
      <Header/>
      {
        props.children
      }
    </div>
  );
}
