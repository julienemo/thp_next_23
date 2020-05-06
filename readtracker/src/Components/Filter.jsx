import React, { useState } from 'react';

const Filter = ({ keyword, onclick }) => {
  const [on, setOn] = useState(false);

  const toggleFilter = () => {
    setOn(!on);
  };
  return (
    <button type="button" className={`btn btn_lg btn_${on}`} onClick={() => { toggleFilter(); onclick(); }}>
      {`${keyword} items`}
    </button>
  );
};

export default Filter;
