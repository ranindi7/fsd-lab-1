import employeeData from "../../employeeData/employees.json";
import type { Department } from "../../types/employeeInterface";

export default function EmployeeData() {
    return(
        <main>
            <h1>Employee Directory</h1>

            <div>
                {employeeData.map((dept: Department) => (
                <div className="employeesDisplay">
                    <h2>{dept.department}</h2>
                    <ul>
                        {dept.employees.map((emp) => (
                            <li>{emp}</li>
                        ))}
                    </ul>
                </div>
                ))}
            </div>
        </main>
    )
}