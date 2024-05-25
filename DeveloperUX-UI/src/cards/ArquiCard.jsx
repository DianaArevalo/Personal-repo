import { useArqui } from '../constants';
import { useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { Icosahedron } from '@react-three/drei';
import ArquiCardFrame from './ArquiCardFrame';

const ArquiCardContent = () => {
    return (
        <div className='gap-12 p-10 '>
            <h1 className='blue-gradient_text font-bold md:text-4xl text-md items-center'>
                Arquitecto Alejandro Arevalo
            </h1>
            <h3 className='font-medium text-blue-default gap-12 p-5'>
                Developed with:
            </h3>
            <div className='flex flex-wrap gap-12 items-center justify-center p-5'>
                {useArqui.map((skill) => (
                    <div key={skill.id} className='block-container w-10 h-10'>
                        <div className='btn-back rounded-xl' />
                        <div className='btn-front rounded-xl flex justify-center items-center'>
                            <img
                                src={skill.imageUrl}
                                alt={skill.name}
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-16 flex flex-wrap gap-12'>
                <p className='text-white/30'>
                    Built with React, Tailwind CSS, JavaScript, framer-motion and three.js. This portfolio presents in a visually appealing way Alejandro's projects and skills in architecture. It includes a contact form using FormSubmit for easy communication, <a href="https://architecturealejandroarevalo.netlify.app/" className='font-bold underline'>  explore it right now!</a>
                </p>
            </div>
            <div className='flex gap-12 p-10 items-center justify-center'>
                <a
                    href="https://architecturealejandroarevalo.netlify.app/"
                    className='font-bold text-2xl text-blue-default'
                >
                    Portafolio || Arquitecto Alejandro Arevalo
                </a>
            </div>
        </div>
    );
};

export const ArquiCard = () => {
    const ref = useRef();

    return (
        <section className='lg:w-[900px] md:w-[400px] w-[300px] min-h-[400px] rounded-[30px] border-[5px] border-arqui-default text-white justify-center items-center bg-arqui-default flex-row '>
            <ArquiCardContent />
            <div className='justify-center p-4'>
                <Canvas>
                    <ambientLight intensity={0} />
                    <hemisphereLight skyColor='#b1e1ff' groundColor={'#000000'} intensity={3} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                    <Icosahedron args={[2.8, 0]} ref={ref}>
                        <meshStandardMaterial color="#669966" />
                    </Icosahedron>
                    <ArquiCardFrame ref={ref} />
                </Canvas>
            </div>
        </section>
    );
};