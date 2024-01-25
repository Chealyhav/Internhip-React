

import { CardAwards } from '@/component/awards';
import { DirectionCard } from '@/component/direction-card';
import { CardGovernance } from '@/component/governance';
import ResizableCardList from '@/component/resizable-card';
import { data1 } from '@/data/data';
import { data2, data3 } from '@/data/data2';
import { data } from '@/data/mockup-data';
import React from 'react';

export default function Home() {
  return (
    <div className="my-16 container">
      
      <ResizableCardList
        title="Our Core Value"
        subtitle="We are driven by"
        items={data}
      />
      <DirectionCard items={data1} />

      <CardAwards items={data2}/>

      <CardGovernance items={data3}/>
      
    </div>
  );
}