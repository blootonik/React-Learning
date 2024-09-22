import styles from '../Components/Input.module.css';

function Input({handleKeyDown}) {

  return (
      <>
          <input onKeyDown={handleKeyDown} type="text" placeholder='Enter Your Foods Here' />
          {/* <p>{textToShow}</p> */}
      </>
  )
}

export default Input