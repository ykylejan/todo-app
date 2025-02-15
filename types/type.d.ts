declare interface ButtonProps {
    label: string;
    className?: string;
    onPress?: any;
}

declare interface InputProps {
    label?: string;
    placeholder: string;
    placeholderTextColor?: string;
    secureTextEntry?: boolean;
    value?: string;
    className?: string;
}

interface TaskItemProps {
    id: number;
    label: string;
    sublabel: string;
    status: string;
    onDelete: (id: number) => void;
}
