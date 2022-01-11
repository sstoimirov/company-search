import { useState } from "react"
import Link from "next/link"
import Header from "@/components/Header"
import Company from "@/components/Company"

export default function Home() {
  const [result, setData] = useState()
  const [search, setSearch] = useState("")
  const handleClick = () =>
    fetch(`http://localhost:3000/api/search?query=${search}`)
      .then((response) => response.json())
      .then((res) => {
        setData(res)
      })
      .catch((err) => alert(err))

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && search) {
      handleClick()
      setSearch("")
    }
  }
  return (
    <>
      <Header>
        <div className="search">
          <input
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type and press Enter..."
          ></input>
          <img
            className="search-icon"
            src="/assets/icon-search.svg"
            alt="Search icon"
          />
        </div>
      </Header>

      {result &&
        (result.data.length >= 1 ? (
          <section className="companies-wrapper">
            {result.data.map((x) => (
              <Link key={x.local_organization_id.id} href="/company/[id]">
                <Company id={x.local_organization_id.id} data={x} />
              </Link>
            ))}
          </section>
        ) : (
          <h3 className="company-no-data-text">
            No results were found, please try again!
          </h3>
        ))}
    </>
  )
}
