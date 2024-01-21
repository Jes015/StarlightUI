interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
}

export const Button: React.FC<ButtonProps> = ({children, className, ...props }) => {
    return (
        <button className="rounded border border-neutral-800 bg-neutral-900 p-1 transition-colors hover:border-neutral-700 hover:bg-neutral-800 active:border-neutral-500 active:bg-neutral-700">{children}</button>
    )
}