import { ButtonHTMLAttributes, ReactNode } from "react"

type Props = {
  children: ReactNode;
  leftIcon: ReactNode;
  rightIcon?: ReactNode;
  containerClass: string;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, leftIcon,rightIcon, containerClass,...props }: Props) => {
  return (
    <button {...props} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>


{leftIcon}
<span className="relative inline-flex overflow-hidden font-general uppercase text-xs">
{children}
</span>
{rightIcon}


    </button>
  )
}

export default Button
