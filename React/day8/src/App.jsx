import Button from "./components/Button"
import withCounter from "./hoc/withCounter"

const EnhancedComponent = withCounter(Button)

const App = () => {
  return (
    <>
    <EnhancedComponent/>
    <Button title ={"commamd"} count ={100}/>
    </>
  )
}

export default App