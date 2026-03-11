import { Link } from "react-router-dom"

export default function UserCard({user}) {

  return (
    <div className="card">

      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.company.name}</p>

      <Link to={`/users/${user.id}`}>
        <button>View Details</button>
      </Link>

    </div>
  )
}