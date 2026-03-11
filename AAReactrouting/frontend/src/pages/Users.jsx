import { useEffect, useState } from "react"
import axios from "axios"
import UserCard from "../components/UserCard"

export default function Users() {

  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
  }, [])

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>

      <input
        className="search"
        placeholder="Search user..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map(user => (
          <UserCard key={user.id} user={user}/>
        ))}
      </div>

    </div>
  )
}