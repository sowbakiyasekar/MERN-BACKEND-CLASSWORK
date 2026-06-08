const Push = () => {
    const before = [1,2,3]
    const after = [1,2,3,4,5]
    return (
    <div>
        <h2>push()</h2>

        <p>
            Adds one or more elements to the
            end of an array
        </p>

        <h3>Syntax</h3>

        <pre>
            arr.push(4,5)
        </pre>

        <h3>Example</h3>

        <pre>
    {`const arr = [1,2,3];
    arr.push(4,5);
    console.log(arr);
    //[1,2,3,4,5]`}        
        </pre>

        <h3>Visual Flow</h3>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "40px"
        }}>

        {/* Before */}

        <div>
          <h3>Before</h3>

          <div style={{
              display: "flex"
            }}>
            {before.map((item) => (
              <div key={item}
                style={{
                  width: "60px",
                  height: "60px",
                  border: "2px solid blue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}

        <h3>
          push(4,5) →
        </h3>

        {/* After */}

        <div>
          <h3>After</h3>

          <div
            style={{
              display: "flex"
            }}
          >
            {after.map((item, index) => (
              <div
                key={index}
                style={{
                  width: "60px",
                  height: "60px",
                  border: "2px solid blue",
                  background:
                    index >= 3
                      ? "lightgreen"
                      : "white",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>

      <h3>
        Return Value : 5
      </h3>

    
    </div>
    );
}

export default Push;