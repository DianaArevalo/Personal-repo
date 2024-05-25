import { useFrame } from "@react-three/fiber"
import { forwardRef } from 'react';

const ArquiCardFrame = forwardRef((props, ref) => {
    useFrame(() => {
        if (ref.current) {
            // Acceder a la propiedad current solo si ref está definida
            ref.current.rotation.x += 0.005;
            ref.current.rotation.y += 0.01;
        }
    });

    return null; // No es necesario renderizar nada aquí
});

export default ArquiCardFrame;