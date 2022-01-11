import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

import Header from "@/components/Header"
import CompanyBasicInfo from "@/components/CompanyBasicInfo"
import ErrorMessage from "@/components/ErrorMessage"

export default function Company() {
  const router = useRouter()
  const { id } = router.query

  const [basicInfo, setBasicInfo] = useState(null)
  useEffect(() => {
    if (id != null) {
      fetch(`http://localhost:3000/api/company/basics/${id}`)
        .then((response) => response.json())
        .then((res) => {
          setBasicInfo(res)
        })
    }
  }, [id])

  return (
    <>
      <Header>
        <div className="header-links">
          <Link href={`/company/${id}/highlights`}>
            <span className="header-link-text">Highlights</span>
          </Link>
          <Link href={`/company/${id}/relations`}>
            <span className="header-link-text">Relations</span>
          </Link>
        </div>
      </Header>
      {basicInfo ? (
        <CompanyBasicInfo data={basicInfo.data} />
      ) : (
        <ErrorMessage />
      )}
    </>
  )
}
