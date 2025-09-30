import type { Organization } from "../../types/organizationInterface";
import { RoleDescriptionDisplay } from "../roleDescriptionDisplay/roleDescriptionDisplay";

export function OrganizationData({
  rolesList
}: {
  rolesList: Organization[];
}) {
    return(
        <>
        <header>
            <h1>Organization</h1>
            <main>
                <RoleDescriptionDisplay
                    roles={rolesList}
                />
            </main>
        </header>
        </>
    )
}