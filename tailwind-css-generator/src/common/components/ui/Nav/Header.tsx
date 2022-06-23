import * as React from 'react';

export interface IHeaderProps {
}

export  function Header (props: IHeaderProps) {
  return (
    <header className='px-10 py-5 border shadow-md'>
      <h1 className='text-4xl font-semibold'>Tailwind css generator</h1>
    </header>
  );
}
