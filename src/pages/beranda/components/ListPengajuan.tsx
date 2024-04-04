import React from "react";
import { Divider, Flex } from "antd";
import { Link } from "react-router-dom";

const ListPengajuanCuti: React.FC = () => {
    return (
        <>
            <Flex justify="space-between" className="mb-5">
                <div className="p-8 flex flex-col text-center bg-cyan-200 rounded">
                    <span className="text-cyan-800 font-bold text-sm">01</span>
                    <span className="text-cyan-800 text-sm">Approved</span>
                </div>
                <div className="p-8 flex flex-col text-center bg-amber-200 rounded">
                    <span className="text-sm font-bold text-amber-800">01</span>
                    <span className="text-sm text-amber-800">Pending</span>
                </div>
                <div className="p-8 flex flex-col text-center bg-red-200 rounded">
                    <span className="text-sm font-bold text-red-800">01</span>
                    <span className="text-sm text-red-800">Rejected</span>
                </div>
            </Flex>

            <Flex align="end" justify="space-between">
                <span className="text-base font-bold">
                    Daftar Pengajuan Cuti
                </span>
                <Link to='/approval-form' className="text-slate-500">
                    Lihat Semua
                </Link>
            </Flex>
            <Divider
                className="mt-3 mb-4"
                style={{
                    borderBlockStart: '2px solid rgba(5, 5, 5, 0.06)'
                }}
            />
            <Flex vertical>
                <span className="text-base font-bold mb-2">Cuti Hamil & Perawatan</span>
                <span className="text-base mb-2">CT | 2 Hari</span>
                <Flex justify="space-between" align="center">
                    <span className="text-sm">Tanggal Request 25 Desember 2023</span>
                    <Link to='/approval-form'>
                        <span style={{ color: "#00644B" }} className="font-bold">{"Approved"}</span> <span className="font-bold">{">"}</span>
                    </Link>
                </Flex>
            </Flex>
            <Divider
                className="mt-3 mb-4"
                style={{
                    borderBlockStart: '2px solid rgba(5, 5, 5, 0.06)'
                }}
            />
            <Flex vertical>
                <span className="text-base font-bold mb-2">Cuti Hamil & Perawatan</span>
                <span className="text-base mb-2">CT | 2 Hari</span>
                <Flex justify="space-between" align="center">
                    <span className="text-sm">Tanggal Request 25 Desember 2023</span>
                    <Link to='/approval-form'>
                        <span style={{ color: "#E57700" }} className="font-bold">{"Pending"}</span> <span className="font-bold">{">"}</span>
                    </Link>
                </Flex>
            </Flex>
            <Divider
                className="mt-3 mb-4"
                style={{
                    borderBlockStart: '2px solid rgba(5, 5, 5, 0.06)'
                }}
            />
            <Flex vertical>
                <span className="text-base font-bold mb-2">Cuti Hamil & Perawatan</span>
                <span className="text-base mb-2">CT | 2 Hari</span>
                <Flex justify="space-between" align="center">
                    <span className="text-sm">Tanggal Request 25 Desember 2023</span>
                    <Link to='/approval-form'>
                        <span style={{ color: "#801100" }} className="font-bold">{"Rejected"}</span> <span className="font-bold">{">"}</span>
                    </Link>
                </Flex>
            </Flex>
            <Divider
                className="mt-3 mb-4"
                style={{
                    borderBlockStart: '2px solid rgba(5, 5, 5, 0.06)'
                }}
            />
        </>
    );
};

export default ListPengajuanCuti;