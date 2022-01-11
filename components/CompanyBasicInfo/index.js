const CompanyBasicInfo = (props) => (
  <>
    <h1 className="company-header-text">Company Details</h1>
    <div className="company-info">
      <div className="company-info-element">
        <span className="company-info-element-title">Company name</span>
        <span className="company-info-element-text">
          {props.data.company_name}
        </span>
      </div>
      <div className="company-info-element">
        <span className="company-info-element-title">Email</span>
        <span className="company-info-element-text">
          {props.data.email.email}
        </span>
      </div>
      <div className="company-info-element">
        <span className="company-info-element-title">Phone</span>
        <span className="company-info-element-text">
          {props.data.phone.phone_number}
        </span>
      </div>
      <div className="company-info-element">
        <span className="company-info-element-title">Address</span>
        <span className="company-info-element-text">
          {props.data.address.street} {props.data.address.number}
          {props.data.address.city}, {props.data.address.country}
        </span>
      </div>
      <div className="company-info-element">
        <span className="company-info-element-title">
          Date of incorporation
        </span>
        <span className="company-info-element-text">
          {new Date(props.data.date_of_incorporation).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            },
          )}
        </span>
      </div>
      {props.data.company_secondary_names && (
        <div className="company-info-element">
          <span className="company-info-element-title">
            Company secondary names
          </span>
          {props.data.company_secondary_names.map((el, index) => (
            <span className="company-info-element-text" key={index}>
              {index + 1}. {el.name}
            </span>
          ))}
        </div>
      )}
      <div className="company-info-element">
        <span className="company-info-element-title">Registered capital</span>
        <span className="company-info-element-text">
          {props.data.registered_capital.currency}{" "}
          {props.data.registered_capital.value}
        </span>
      </div>
      <div className="company-info-element">
        <span className="company-info-element-title">Vat</span>
        <span className="company-info-element-text">
          {props.data.vat ? "True" : "False"}
        </span>
      </div>
      <div className="company-info-element">
        <span className="company-info-element-title">Score</span>
        <span className="company-info-element-text">{props.data.score}</span>
      </div>
      <div className="company-info-element">
        <span className="company-info-element-title">Status</span>
        <span className="company-info-element-text">{props.data.status}</span>
      </div>
      <div className="company-info-element">
        <span className="company-info-element-title">Company type</span>
        <span className="company-info-element-text">
          {props.data.company_type.long}, {props.data.company_type.short}
        </span>
      </div>
      <div className="company-info-element">
        <span className="company-info-element-title">Main Industry code</span>
        <span className="company-info-element-text">
          {props.data.main_industry_code.code}
        </span>
      </div>
      <div className="company-info-element">
        <span className="company-info-element-title">
          Local organization id
        </span>
        <span className="company-info-element-text">
          {props.data.local_organization_id.id}
        </span>
      </div>
      <div className="company-info-element">
        <span className="company-info-element-title">Risk assessment</span>
        <span className="company-info-element-text">
          {props.data.risk_assessment}
        </span>
      </div>
    </div>
  </>
)

export default CompanyBasicInfo
