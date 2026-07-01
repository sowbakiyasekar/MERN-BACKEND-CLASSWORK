const TopicsCard = ({title,description}) => {
    console.log(title,description)
  return (
    <>
    <div className="bg-gray-900 rounded-2xl p-5 text-white">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    </>
  )
}

export default TopicsCard