import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { increaseCount } from '../../slices/customSlice';

function Home() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.custom.count);

  return (
    <div className="App">
      <h1 className="underline">Hello World</h1>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="text-blue-400"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <div>
        <button
          onClick={() => dispatch(increaseCount())}
          className="button bg-blue-500 text-white py-2 px-4 rounded"
        >
          Click!
        </button>
        <span className="pl-6 font-semibold text-lg">{count}</span>
      </div>
    </div>
  );
}

export default Home;
