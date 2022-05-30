type Props = {
    label: string
    onClick: () => void
} 
const Button: React.FC<Props> = ({label, onClick}) =>{
    return(
        <button
            className="rounded-xl bg-red-400 py-2 px-8 text-white"
            onClick={onClick}
        >
            {label}
        </button>
    )
}
export default Button