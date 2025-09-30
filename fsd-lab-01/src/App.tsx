import './App.css'
import Header from './components/headerComponent/Header'
import Footer from './components/footerComponent/Footer'
import EmployeeData from './components/pages/employeeData'
import { OrganizationData } from './components/pages/organizationData'
import organizationList from './jsonData/organization.json'
import type { Organization } from './types/organizationInterface'

function App() {
  const organizations: Organization[] = organizationList

  return (
    <>
      <Header />
      <EmployeeData />
      <OrganizationData organizationList={organizations} />
      <Footer />
    </>
  )
}

export default App
