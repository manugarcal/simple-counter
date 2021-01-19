
import './App.css';
import SecondCounter from './components/SecondsCounter';
import StopButton from './components/StopButton';


function App(props) {
  return (
    <>
    <SecondCounter counter6={props.count6} counter5={props.count5} counter4={props.count4} counter3={props.count3} counter2={props.count2} counter1={props.count1} />
    <StopButton id={props.varNameId}  />
    </>
  );
}

export default App;
