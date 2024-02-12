import React from "react";
import TraceEntry from "./TraceEntry";

function TraceResult({ result }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-2">Trace Results</h2>
      <div className="w-full max-w-3xl mx-auto">
        <div className="-my-6">
          {result.map((redirectTrace: any, index) => {
            return <TraceEntry key={index} entry={redirectTrace} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TraceResult;
