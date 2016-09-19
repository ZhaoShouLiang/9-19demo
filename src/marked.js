import React, { PropTypes } from 'react';


class Marked extends React.Component {
  render () {
  	let content =marked('# cafxa');
    return(
      <div>
      	<div  dangerouslySetInnerHTML={{__html:content}}>
      	</div>
      </div>
    )
  }
}

export default Marked;
