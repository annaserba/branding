import React, {useCallback, useState} from 'react';

export function Count() {
  const [count, setCount] = useState<number>(0);
  const handleAdd = useCallback(() => setCount(count + 1), [count]);
  const handleSub = useCallback(() => setCount(count - 1), [count]);
  const btnStyle: React.CSSProperties = {marginRight: 10, fontSize: 20, width: 40, textAlign: 'center'};
  return (
    <>
      <h1>Count : {count}</h1>
      <button style={btnStyle} onClick={handleAdd}>+</button>
      <button style={btnStyle} onClick={handleSub}>-</button>
    </>
  )
}
