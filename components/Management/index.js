import ErrorMessage from "../ErrorMessage"
import { setManagementData } from "./utils/setManagementData"
const managementRoles = [
  "MANAGEMENT",
  "ADMINISTRATION",
  "CHIEF EXECUTIVE OFFICER",
  "BOARD OF DIRECTORS",
  "CHAIRMAN",
  "DEPUTY CHAIRMAN",
  "DEPUTY",
  "STAKEHOLDER",
]

const Management = ({ relations }) => {
  const { management, boardOfDirectors } = relations

  const managementData = setManagementData(managementRoles, [
    ...management,
    ...boardOfDirectors,
  ])
  const keys = managementData.length > 0 && Object.keys(managementData[0])
  return managementData.length > 0 && keys.length > 0 ? (
    <>
      <h1 className="company-header-text">Management Data</h1>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              {keys.map((key) => (
                <th className="table-header" key={`only keys ${key}`}>
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {managementData.map((data, i) => (
              <tr key={i}>
                {keys.map((key) => (
                  <th className="table-element" key={key}>
                    {data[key]}
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <ErrorMessage />
  )
}

export default Management
