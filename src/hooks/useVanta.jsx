import { useRef, useEffect, useState } from 'react';
import Net from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const useVanta = () => {
    const myRefDiv = useRef(null) 
    const [vanta, setVanta] = useState(0) 

    useEffect(() => {
        if (!vanta) {
            setVanta(Net({
                THREE,
                el: myRefDiv.current,
                color: 0xf9f9f9,
                backgroundColor: 0x246d,
                points: 20.00,
                maxDistance: 20.00,
                spacing: 20.00

            })) 
        }
        return () => {
            if (vanta) {
                vanta.destroy()
            }
        }
    }, [vanta])

    return myRefDiv
}

export default useVanta