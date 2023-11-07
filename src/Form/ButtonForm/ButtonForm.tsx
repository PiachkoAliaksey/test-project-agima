import React, { ReactNode } from "react";
import './style.scss';

interface IProps {
    children?: ReactNode,
    innerRef?: React.RefObject<HTMLLIElement>,
    onClick?: React.MouseEventHandler<HTMLLIElement> | undefined
}

const FormButton = ({ children, innerRef, onClick, ...props }: IProps) => {
    return (
        <li ref={innerRef} onClick={onClick} className="item-controller" {...props}>{children}</li>
    )
}

export default FormButton;