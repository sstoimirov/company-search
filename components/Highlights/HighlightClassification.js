const Classification = (props) =>
  props.elements.length > 0 && (
    <>
      <h3 className="highlights-type-title">{props.title}</h3>

      {props.elements.map((_, index) => (
        <div
          className="highlights-info"
          key={index}
          style={{
            borderLeft: `4px solid ${props.borderColor}`,
          }}
        >
          <div>{props.elements[index].title}</div>
          <div>{props.elements[index].message}</div>
        </div>
      ))}
    </>
  )

export default Classification
