import React from 'react';
import { Button ,Icon} from 'semantic-ui-react'

const CallButton = () => {
  const phoneNumber = '8948584874'; // Replace with your desired phone number

  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Button positive fluid onClick={handleCallButtonClick}> <Icon className='call'></Icon> Order Now</Button>
   
  );
};

export default CallButton;
