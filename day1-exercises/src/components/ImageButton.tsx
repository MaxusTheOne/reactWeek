

export default function ImageButton({image, onClick}:ImageButtonProps){

    return (
        <button className="imageButton"{...onClick}><img src={image} /></button>
       
    )
}

interface ImageButtonProps {
    image: string;
    onClick: () => void;
}