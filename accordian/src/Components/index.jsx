import React, { useState } from 'react';
import { data }       from './data';

export default function Accordian() {
  const [selected, setSelected]                 = useState(null);
  const [enableMultiSelection, setEnableMulti] = useState(false);
  const [multiple, setMultiple]                = useState([]);

  function handleMultiSelection(getCurrentId) {
    const cpy = [...multiple];
    const idx = cpy.indexOf(getCurrentId);

    if (idx === -1) cpy.push(getCurrentId);
    else cpy.splice(idx, 1);

    setMultiple(cpy);
  }

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMulti(!enableMultiSelection)}>
        {enableMultiSelection
          ? 'Disable Multi Selection'
          : 'Enable Multi Selection'}
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map(item => {
            const isOpen = enableMultiSelection
              ? multiple.includes(item.id)
              : selected === item.id;

            return (
              <div className="item" key={item.id}>
                <div
                  className="title"
                  onClick={() =>
                    enableMultiSelection
                      ? handleMultiSelection(item.id)
                      : handleSingleSelection(item.id)
                  }
                >
                  <h3>{item.question}</h3>
                  <span>{isOpen ? '−' : '+'}</span>
                </div>

                {isOpen && (
                  <div className="content">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
