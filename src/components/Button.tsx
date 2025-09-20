
interface ButtonInterface {
    text:string;
    dimensions: {
        width: string;
        height: string;
    }
}


const Button = ({text, dimensions}:ButtonInterface) => {
return(
    <button className={`w-${dimensions.width} h-${dimensions.height}  text-txt px-3 py-1.5 text-4xl uppercase rounded-lg border-opacity border-1 relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-full h-full via-20% bg-gradient-to-b from-txt via-bg-dark-extra to-txt -z-10 blur-lg opacity-45"></div>
        {text}</button>
)
}

export default Button;