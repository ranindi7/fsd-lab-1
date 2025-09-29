import organizationData from "../../jsonData/organization.json"
import type { Organization } from "../../types/organizationInterface"

export default function OrganizationData() {
    return(
        <main>
            <h1>Organization</h1>

            <div>
                {organizationData.map((organization: Organization) => (
                <div className="ogranizationDisplay">
                    <h2>{organization.role}</h2>
                    <p>{organization.name}</p>
                </div>
                ))}
            </div>        
        </main>
    )
}