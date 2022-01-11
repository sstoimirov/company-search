import Link from "next/link"
const Company = (props) => (
  <Link href={`/company/${props.id}`}>
    <div className="company-wrapper" key={props.data.local_organization_id.id}>
      Company ID: {props.data.local_organization_id.id}
      <span>Company name: {props.data.company_name}</span>
      {props.data.email.email && <span>Email: {props.data.email.email}</span>}
      {props.data.phone.phone_number && (
        <span>Phone: {props.data.phone.phone_number}</span>
      )}
      <div>
        Address: {props.data.address.street} {props.data.address.number}
        {props.data.address.city}, {props.data.address.country}
      </div>
    </div>
  </Link>
)

export default Company
