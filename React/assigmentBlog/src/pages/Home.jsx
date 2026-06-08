import { methods } from "../data/methods";
import MethodCard from "../components/MethodCard";

const Home = () => {
    return (
    <div className="home">

      <h1>JavaScript Array Methods</h1>

      <div className="grid">

        {methods.map((method) => (
          <MethodCard
            key={method.id}
            method={method}
          />
        ))}

      </div>
    </div>
    )
}
export default Home;