import React from 'react';

function DisplayiFrame({src, id}) {

return(
    <iframe title={id} src={src} allowfullscreen="false" />
)
    
}

export default DisplayiFrame;