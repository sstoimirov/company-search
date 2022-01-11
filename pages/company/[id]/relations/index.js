import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

import Header from "@/components/Header"
import Management from "@/components/Management"
import { companyRelations } from "@/requests"

export default function Relations() {
  const router = useRouter()
  const { id } = router.query

  const [relations, setRelations] = useState(null)
  useEffect(() => {
    if (id != null) {
      companyRelations({ id }).then((res) => {
        setRelations(res)
      })
    }
  }, [id])

  return (
    <>
      <Header>
        <div className="header-links ">
          <Link href={`/company/${id}/highlights`}>
            <span className="header-link-text">Highlights</span>
          </Link>
          <Link href={`/company/${id}`}>
            <span className="header-link-text">About</span>
          </Link>
        </div>
      </Header>
      {relations ? <Management relations={relations} /> : null}
    </>
  )
}
