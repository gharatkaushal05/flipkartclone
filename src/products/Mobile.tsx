"use client"

"use client"

import React from 'react';
import data from '../../data.json';
import MobileList from './MobileList';

function Mobile() {
  return (
    <div>
      <MobileList items={data} />
    </div>
  );
}

export default Mobile;
