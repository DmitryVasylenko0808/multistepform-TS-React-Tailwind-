import React from 'react';

type BlockProps = {
    children?: React.ReactNode;
} 

const Block = ({ children }: BlockProps) => {
  return (
    <div className='h-full flex flex-col flex-auto pt-9 pl-16 pr-12'>{children}</div>
  );
}

export default Block;
