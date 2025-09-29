import type { Organization } from "../../types/organizationInterface";

export function RoleDescription(
    {
        organization,
        isExpanded,
        onRoleClick,
    } 
    : {
        organization: Organization,
        isExpanded: boolean,
        onRoleClick: () => void,
    }
) { 
    return (
        <div className="roleDescription">
            <div>
                <h3 onClick={onRoleClick}>
                    {organization.role}
                </h3>
            </div>

            { isExpanded 
                ? <p>{organization.roleDescription}</p>
                : null
            }
        </div>
    )
}