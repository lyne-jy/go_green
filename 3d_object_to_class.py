

a = '''
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const ($class name$) = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/($file$).glb')
    const txt = useLoader(TextureLoader, '/obj/($file$).png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default ($class name$)
'''

from os import walk

f = []
for (dirpath, dirnames, filenames) in walk("public/obj"):
    f.extend(filenames)
    break

for name in f:
    # Remove file extension
    name = name.split(".")[0]
    file = name
    print(name)


    # Underscore naming convert to camelCase
    class_name = name
    class_name = class_name.replace("_", " ")
    class_name = class_name.title()
    class_name = class_name.replace(" ", "")

    # Replace $file$ with name
    b = a
    b = b.replace("($file$)", file)
    b = b.replace("($class name$)", class_name)


    with open("src/objects/%s.js" % class_name, "w") as f:
        f.write(b)    
