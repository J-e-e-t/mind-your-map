import React, { useState } from "react";
import ReactFlow, { removeElements, addEdge } from "react-flow-renderer";
import { Button } from "@mui/material";

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },
  {
    id: "2",
    data: { label: "Another Node" },
    position: { x: 100, y: 125 },
  },
];

const Index = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const addNode = () =>{
    const elm=[...elements,{
      id: "3",
    data: { label: "New Node" },
    position: { x: 150, y: 125 },
    }]
    setElements(elm)
  }

  return (
    <>
      <div style={{ height: 400 }}>
        <ReactFlow
          elements={elements}
          onElementsRemove={onElementsRemove}
          onConnect={onConnect}
          deleteKeyCode={46} /* 'delete'-key */
        />
      </div>
      <Button onClick={addNode}>add Node</Button> 
    </>
  );
};

export default Index;
