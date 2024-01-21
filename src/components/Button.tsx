interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
}

export const Button: React.FC<ButtonProps> = ({children, className, ...props }) => {
    return (
        <button
            className={
                [
                    'bg-neutral-50 hover:bg-red-600',
                    className
                ].join(' ')
            }
            {...props}
        >
            {children}
        </button>
    )
}