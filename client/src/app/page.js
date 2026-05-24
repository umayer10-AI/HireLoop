import Banner1 from '@/component/Banner1';
import Banner2 from '@/component/Banner2';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className="bg-[url('../../public/globe.png')] bg-cover bg-center bg-no-repeat">
        <Banner1></Banner1>
        <Banner2></Banner2>
      </div>
    </div>
  );
};

export default page;