const withCounter = (WrappedComponent) => {

    return () => {
        return <WrappedComponent title="Likes" count= {100}/>
    }
}

export default withCounter