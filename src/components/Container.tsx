import React from 'react';

type ContainerProps = {
    children?: React.ReactNode;
} 

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='h-full flex flex-col justify-center items-center bg-sky-50'>
      <div className='w-[920px] h-[608px] rounded-2xl bg-white shadow-xl flex p-5'>
        {children}
      </div>
    </div>
  );
}

export default Container;
