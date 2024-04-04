import React from "react";
import { Button, Divider, Flex } from "antd";

const ApprovalForm: React.FC = () => {
    return (
        <div className="mt-5 mx-5">
            <Flex align="center" justify="space-between" className="mb-3">
                <span className="text-base text-gray-500">Tanggal Pengajuan Cuti</span>
                <span className="text-base">8 Desember 2024</span>
            </Flex>
            <Flex align="center" justify="space-between" className="mb-3">
                <span className="text-base text-gray-500">Status Pengajuan</span>
                <span className="text-base font-bold text-amber-800">Pending</span>
            </Flex>
            <Flex align="center" justify="space-between">
                <span className="text-base text-gray-500">User Approval Name</span>
                <span className="text-base">-</span>
            </Flex>
            <Divider
                className="mt-3 mb-4"
                style={{
                    borderBlockStart: '2px solid rgba(5, 5, 5, 0.06)'
                }}
            />
            <Flex align="center" justify="space-between" className="mb-6">
                <span className="text-base text-gray-500">Alasan Cuti</span>
                <span className="text-base">Pregnancy Leave</span>
            </Flex>
            <Flex justify="space-between" className="mb-6" vertical>
                <span className="text-base text-gray-500">Status Pengajuan</span>
                <span className="text-base text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ea cum ratione aliquid ad animi, quod quas quaerat voluptatibus tempora soluta. Commodi culpa fugit soluta molestias enim aut rerum optio!
                </span>
            </Flex>
            <Flex align="center" justify="space-between" className="mb-6">
                <span className="text-base text-gray-500">Direquest oleh</span>
                <span className="text-base">Angel Doe</span>
            </Flex>
            <Flex align="center" justify="space-between" className="mb-6">
                <span className="text-base text-gray-500">Jenis Cuti</span>
                <span className="text-base">CT</span>
            </Flex>
            <Flex align="center" justify="space-between">
                <span className="text-base text-gray-500">Tanggal Cuti</span>
                <span className="text-base">15 Maret 2023 - 18 Maret 2023</span>
            </Flex>
            <Divider
                className="mt-3 mb-4"
                style={{
                    borderBlockStart: '2px solid rgba(5, 5, 5, 0.06)'
                }}
            />
            <Flex align="end" justify="center" className="min-h-80">
                <Flex align="center" justify="space-evenly" className="min-w-full">
                    <Button
                        size="large"
                        style={{
                            backgroundColor: "rgba(219, 31, 32, 1)",
                            borderColor: "rgba(219, 31, 32, 1)",
                            color: "#fff"
                        }}
                    >Reject Cuti</Button>
                    <Button
                        size="large"
                        style={{
                            backgroundColor: "rgba(21, 176, 151, 1)",
                            borderColor: "rgba(21, 176, 151, 1)",
                            color: "#fff"
                        }}
                    >Approve Cuti</Button>
                </Flex>
            </Flex>
        </div>
    );
};

export default ApprovalForm;