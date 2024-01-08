import { Link } from 'react-router-dom'

// type Props = {}

const Home = () => {
  return (
    <div>
        <h1 style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>Go to <Link to="/About">About</Link> Page</h1>
    </div>
  )
}

export default Home