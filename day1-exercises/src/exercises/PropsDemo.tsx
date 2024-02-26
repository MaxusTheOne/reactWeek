
import { BaseProps } from "../types";
import { useState } from "react";
import Profile from "../components/Profile";



export default function PropsDemo({ title }: BaseProps) {
    const [showHorizontal, setShowHorizontal] = useState(false);
    return (
        <>
            <h2>{title}</h2>
            Direction: <input type="checkbox" checked={showHorizontal} onChange={()=>setShowHorizontal(!showHorizontal)}/>
            <Profile name="Max Power" email="mp@email.com" isActive={true} singleLine={showHorizontal} />
            <Profile name="John Doe" email="John@doe.com" isActive={false} singleLine={showHorizontal}/>
            
            {/** Add two or more Profiles, but not until you actually have implemented <Profile />   */}
        </>
    );
}
