import React, { useState } from "react";
import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
} from "react-flow-renderer";
import { Button } from "@mui/material";
import Header from "../../../components/playground/header"

const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

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

  const addNode = () => {
    const elm = [
      ...elements,
      {
        id: "3",
        data: { label: "New Node" },
        position: { x: 150, y: 125 },
      },
    ];
    setElements(elm);
  };

  return (
    <>
      <Header></Header>
      <div style={{ height: "50vw" }}>
        <ReactFlow
          elements={elements}
          onElementsRemove={onElementsRemove}
          onConnect={onConnect}
          deleteKeyCode={46} /* 'delete'-key */
          onLoad={onLoad}
          snapToGrid={true}
          snapGrid={[15, 15]}
        >
          <MiniMap
            nodeStrokeColor={(n) => {
              if (n.style?.background) return n.style.background;
              if (n.type === "input") return "#0041d0";
              if (n.type === "output") return "#ff0072";
              if (n.type === "default") return "#1a192b";

              return "#eee";
            }}
            nodeColor={(n) => {
              if (n.style?.background) return n.style.background;

              return "#fff";
            }}
            nodeBorderRadius={2}
          />
        </ReactFlow>
      </div>
      <Button onClick={addNode}>add Node</Button>
    </>
  );
};

export default Index;
