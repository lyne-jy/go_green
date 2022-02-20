import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";

const TreeTall = () => {
  const obj = useLoader(GLTFLoader, "/obj/tree_tall.glb");
  const txt = useLoader(TextureLoader, "/obj/tree_tall.png");

  return (
    <mesh>
      <primitive object={obj.scene} map={txt} />
    </mesh>
  );
};

export default TreeTall;
