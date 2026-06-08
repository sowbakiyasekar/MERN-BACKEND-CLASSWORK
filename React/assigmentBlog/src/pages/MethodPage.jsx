import { useParams } from "react-router-dom";

import { methods } from "../data/methods";

import MethodVisualizer from "../components/MethodVisualizer";

function MethodPage() {

  const { id } = useParams();

  const method =
    methods.find(
      (item) => item.id === id
    );

  return (
    <MethodVisualizer
      {...method}
    />
  );
}

export default MethodPage;