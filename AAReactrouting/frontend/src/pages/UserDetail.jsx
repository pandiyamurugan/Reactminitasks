import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function UserDetail() {

  const {id} = useParams()
  const [user,setUser] = useState(null)

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res=>setUser(res.data))
  },[id])

  if(!user) return <p>Loading...</p>

  return (
    <div className="detail">

      <h2>{user.name}</h2>

      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>

      <h3>Company</h3>
      <p>{user.company.name}</p>

      <h3>Address</h3>
      <p>{user.address.city}</p>

    </div>
  )
}