function MethodVisualizer({
  title,
  definition,
  syntax,
  example,
  output,
  before,
  after,
  operation,
  returnValue,
  highlightAfter = []
}) {
  return (
    <div>

      <h1>{title}</h1>

      <p>{definition}</p>

      <h2>Syntax</h2>
      <pre>{syntax}</pre>

      <h2>Example</h2>
      <pre>{example}</pre>

      <h2>Output</h2>
      <pre>{output}</pre>

      <h2>Visual Flow</h2>

      <div className="flow">

        <div>
          <h3>Before</h3>

          <div className="array">
            {before.map((item,index) => (
              <div
                key={index}
                className="box"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <h3>{operation}</h3>

        <div>
          <h3>After</h3>

          <div className="array">
            {after.map((item,index) => (
              <div
                key={index}
                className={
                  highlightAfter.includes(index)
                  ? "box added"
                  : "box"
                }
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>

      <h3>
        Returns : {JSON.stringify(returnValue)}
      </h3>

    </div>
  );
}

export default MethodVisualizer;