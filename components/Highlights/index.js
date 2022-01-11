import Classification from "./HighlightClassification"

const Highlights = (props) => {
  const elementKeys = Object.keys(props.data),
    positiveArr = [],
    negativeArr = [],
    neutralArr = []
  elementKeys
    .map((x) => props.data[x])
    .sort((a, b) => a.weight - b.weight)
    .forEach((x) => {
      if (x.classification === "negative") negativeArr.push(x)
      else if (x.classification === "positive") positiveArr.push(x)
      else neutralArr.push(x)
    })

  const color = (type) => {
    let col = "#666"
    if (type === "negative") {
      col = "#DF2121"
    } else if (type === "positive") {
      col = "#018940"
    }
    return col
  }
  return (
    <>
      <h1 className="company-header-text">Highlights</h1>
      <div className="highlights-wrapper">
        <Classification
          title={"Negative"}
          borderColor={color("negative")}
          elements={negativeArr}
        />
        <Classification
          title={"Positive"}
          borderColor={color("positive")}
          elements={positiveArr}
        />
        <Classification
          title={"Neutral"}
          borderColor={color("neutral")}
          elements={neutralArr}
        />
      </div>
    </>
  )
}

export default Highlights
