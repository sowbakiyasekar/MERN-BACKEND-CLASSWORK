import ArrayofArray from "../components/ArrayofArray"

const Home = () => {
    const arrofArr = [
        "sowbakiya",
        29,
        ["html","css","js","react"],
    ]
    return (
        <>
        <ArrayofArray data = {arrofArr}/>
        </>
    )
}
export default Home