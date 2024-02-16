import { useAtom } from 'jotai';
import { counterAtom, useMinusCount, usePlusCount } from './counterStore';

const TestComponent = () => {
  const [count] = useAtom(counterAtom);

  return <>{count}</>;
};

const JotaiExample = () => {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <>
      <button onClick={() => usePlusCount()}>+</button>
      <span>{count}</span>
      <button onClick={() => useMinusCount()}>-</button>
      <TestComponent />
      <TestComponent />
      <TestComponent />
    </>
  );
};

export default JotaiExample;
