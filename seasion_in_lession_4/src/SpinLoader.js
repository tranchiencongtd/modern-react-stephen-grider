import React from 'react';

const SpinLoader = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui massive text loader">{props.message}</div>
    </div>
  );
};

SpinLoader.defaultProps = {
  message: 'Loading ....',
};

export default SpinLoader;
