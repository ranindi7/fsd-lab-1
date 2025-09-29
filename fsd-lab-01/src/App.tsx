import './App.css'
import Header from './components/headerComponent/Header'
import Footer from './components/footerComponent/Footer'
import EmployeeData from './components/employeeDataComponent/employeeData'
import OrganizationData from './components/organizationDataComponent/organizationData'

function App() {


  return (
    <>
      <Header />
      <EmployeeData />
      <OrganizationData />
      <Footer />
    </>
  )
}

export default App
