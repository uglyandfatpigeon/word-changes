import './styles.css';

const ScreenWrapper = (props) => {
  return (
    <div className='screenWrapper'>
      {props.children}
    </div>
  )
}

export default ScreenWrapper;