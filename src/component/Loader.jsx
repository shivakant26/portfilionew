import React from 'react';
import { Circles } from 'react-loader-spinner';

const Loader = () => (
  <Circles
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
);

export default Loader;
