import React from "react"
import { Modal as AntdModal } from "antd"

interface ModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    title: string;
    children: React.ReactNode;
    onClick?: () => void;
    okButtonProps?: any;
    cancelButtonProps?: any;
};

const Modal: React.FC<ModalProps> = ({ open, setOpen, title, children, onClick, okButtonProps, cancelButtonProps }) => {

    return (
        <AntdModal
            centered
            closable={false}
            title={<div className="text-center text-lg">{title}</div>}
            open={open}
            onOk={onClick}
            onCancel={() => setOpen(!open)}
            okButtonProps={okButtonProps}
            cancelButtonProps={cancelButtonProps}
        >
            <div className="p-3">
                {children}
            </div>
        </AntdModal>
    );
};

export default Modal;