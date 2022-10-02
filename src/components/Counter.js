import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const increaseCounter = () => {
    dispatch({type : 'increment'});
  }

  const decreaseCounter = () => {
    dispatch({type : 'decrement'})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div>
        <button onClick={increaseCounter}>Increase</button> 
        <button onClick={decreaseCounter}>Decrease</button>
      </div>
      {/* <button onClick={toggleCounterHandler}>Toggle Counter</button> */}
    </main>
  );
};

export default Counter;
