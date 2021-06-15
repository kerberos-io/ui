import React from "react";
import "./button.scss";

export interface ButtonProps  {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
};

/**
 * Primary UI component for user interaction
 */
const Button = ({
                    primary = true,
                    backgroundColor,
                    size = "medium",
                    onClick,
                    label,
                }: ButtonProps) => {
    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (
        <button
            type="button"
            onClick={onClick}
        >
            <div className={"yolo"}>ok</div>
            {label}
            <span>
                <div>ok</div>
            </span>
        </button>
    );
};

export default Button;
