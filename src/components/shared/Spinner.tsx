import React from 'react';

type Props = {
  message?: string;
} & typeof defaultProps;

const defaultProps = {
  message: 'Loading...',
};

const Spinner = ({ message, ...props }: Props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{message}</div>
    </div>
  );
};

Spinner.defaultProps = defaultProps;

export default Spinner;
