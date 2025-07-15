import { useEffect, useState } from "react";



export default function RandomColor (){
    // we have to make two variables in which we store the type and in the second we store the color
    const [color  , setColor] = useState('#345678')
    const [typeOfColor , setTypeOfColor] = useState('hex')



    function randomColorUtility(length) {
        return Math.floor(Math.random()*length)
    }

    function handleCreateRandomHexColor() {
        const hex = [0 , 1, 2 , 3 , 4 ,5 , 6 , 7 , 8 ,9 , "A" , "B" , "C" , "D" , "E" , "F"];
        let hexColor = "#";

        for (let i = 0 ; i <6 ; i++ ){
            hexColor+= hex[randomColorUtility(hex.length)]
        }

        setColor(hexColor)
    }

       function handleCreateRandomrgbColor() {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r} , ${g} , ${b})`);
    }
    useEffect(() =>{
        if(typeOfColor === 'rgb') handleCreateRandomrgbColor()
        else handleCreateRandomHexColor();
    } , [typeOfColor])

    return (
        <div style={{
            height: '100vh' ,
            width : '100vw' ,
            background: color,
        }}
        >
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomrgbColor}>Generate Random Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create rgb Color</button>
        <button onClick={() => setTypeOfColor('hex')}>Create HEX color</button>

        <div style={{
            display: 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            color : '#fff',
            fontSize : '60px',
            marginTop : '50px',
            flexDirection: 'column' ,
            gap :'20px'
            

        }}>
            <h1>{color}</h1>
            {/* <h3>{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"  }</h3> */}
        </div>
        </div>
    );
}