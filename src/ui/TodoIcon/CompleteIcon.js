import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? '#001d3d' : 'blue'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
