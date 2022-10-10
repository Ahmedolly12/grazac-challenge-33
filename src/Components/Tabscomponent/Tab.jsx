import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./Tab.css"
// import Sonnet from '../../components/Sonnet';

function ControlledTabsExample() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title='Product information'>
        <p className='tabcontent'>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched
             the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
             <p className='tabcontent'>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched
             the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
             <p className='tabcontent'>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched
             the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="profile" title="Review 0">
      <p className='tabcontent'>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched
             the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
             <p className='tabcontent'>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched
             the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
       
      </Tab>
      <Tab eventKey="contact" title="Another tab">
        <p className='tabcontent'>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched
             the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;