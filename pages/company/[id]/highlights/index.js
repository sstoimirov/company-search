import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Header from "@/components/Header"
import Highlights from "@/components/Highlights"
import ErrorMessage from "@/components/ErrorMessage"

export default function InfoPage() {
  const router = useRouter()
  const { id } = router.query
  const [highlights, setHighlights] = useState(null)
  useEffect(() => {
    if (id != null) {
      fetch(`http://localhost:3000/api/company/highlights/${id}`)
        .then((response) => response.json())
        .then((res) => {
          setHighlights(res)
        })
    }
  }, [id])

  return (
    <>
      <Header>
        <div className="header-links ">
          <Link href={`/company/${id}/relations`}>
            <span className="header-link-text">Relations</span>
          </Link>
          <Link href={`/company/${id}`}>
            <span className="header-link-text">About</span>
          </Link>
        </div>
      </Header>
      {highlights ? <Highlights data={highlights.data} /> : <ErrorMessage />}
    </>
  )
}
