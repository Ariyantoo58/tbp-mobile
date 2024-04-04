import React from "react";
import { Flex, List, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import "../style.scss";

const data = [
    {
        key: "Tempat / Tanggal Lahir",
        value: "Depok, 29 Mei 2002"
    },
    {
        key: "NIK",
        value: "6104163903970003"
    },
    {
        key: "Kewarganegaraan",
        value: "Indonesia"
    },
    {
        key: "Agama",
        value: "Islam"
    },
    {
        key: "Martial",
        value: "Menikah"
    },
    {
        key: "Golongan Darah",
        value: "B"
    },
    {
        key: "Nomor Polisi",
        value: "B 1234 EAZ"
    },
    {
        key: "Nomor Passport",
        value: "-"
    },
    {
        key: "SIM A",
        value: "-"
    },
    {
        key: "SIM C",
        value: "-"
    },
];

const data1 = [
    {
        key: "Status Pegawai",
        value: "Aktif"
    },
    {
        key: "NPK Atasan",
        value: "-"
    },
    {
        key: "Golongan",
        value: "-"
    },
    {
        key: "Jabatan",
        value: "Fullstack Developer"
    },
    {
        key: "Admin",
        value: "-"
    },
    {
        key: "Bagian",
        value: "IT"
    },
    {
        key: "PKTP",
        value: "-"
    },
    {
        key: "Tanggal Masuk",
        value: "-"
    },
    {
        key: "Tanggal Angkat",
        value: "-"
    },
    {
        key: "SPSI",
        value: "-"
    },
    {
        key: "Jamsostek",
        value: "-"
    },
    {
        key: "Koperasi",
        value: "-"
    },
    {
        key: "Tanggal Keluar",
        value: "-"
    },
    {
        key: "Email 1",
        value: "-"
    },
    {
        key: "Email 2",
        value: "-"
    },
];

const data2 = [
    {
        key: "Bank",
        value: "Bank Central Asia (BCA)"
    },
    {
        key: "No. Acc Bank",
        value: "-"
    },
    {
        key: "Nama Acc Bank",
        value: "Fawwaz Hudzalfah Saputra"
    },
    {
        key: "No. Acc Hutang",
        value: "Yulia Limbo"
    },
    {
        key: "NPWP",
        value: "-"
    },
    {
        key: "No BPJS Ketenagakerjaan",
        value: "-"
    },
    {
        key: "Tgl BPJS Ketenagakerjaan",
        value: "-"
    },
    {
        key: "No. ADHK",
        value: "-"
    },
    {
        key: "No. BPJS Kesehatan",
        value: "-"
    },
    {
        key: "Nama Faskes TK 1",
        value: "-"
    },
    {
        key: "Nama Faskes Dokter Gigi",
        value: "-"
    },
    {
        key: "Kelas Rawat BPJS",
        value: "-"
    }
];

const TabInformasi: React.FC = () => {

    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Data Personal',
            children: (
                <div className="mx-3 scrollable-content">
                    <List
                        bordered
                        size="large"
                        dataSource={data}
                        renderItem={(item: any) => (
                            <List.Item>
                                <Flex vertical>
                                    <span className="mb-2 font-bold text-base">{item?.key.toString()}</span>
                                    <span>{item?.value.toString()}</span>
                                </Flex>
                            </List.Item>
                        )}
                    />
                </div>
            )
        },
        {
            key: '2',
            label: 'Data Kepegawaian',
            children: (
                <div className="mx-3 scrollable-content">
                    <List
                        bordered
                        size="large"
                        dataSource={data1}
                        renderItem={(item: any) => (
                            <List.Item>
                                <Flex vertical>
                                    <span className="mb-2 font-bold text-base">{item?.key.toString()}</span>
                                    <span>{item?.value.toString()}</span>
                                </Flex>
                            </List.Item>
                        )}
                    />
                </div>
            ),
        },
        {
            key: '3',
            label: 'Data Fasilitas',
            children: (
                <div className="mx-3 scrollable-content">
                    <List
                        bordered
                        size="large"
                        dataSource={data2}
                        renderItem={(item: any) => (
                            <List.Item>
                                <Flex vertical>
                                    <span className="mb-2 font-bold text-base">{item?.key.toString()}</span>
                                    <span>{item?.value.toString()}</span>
                                </Flex>
                            </List.Item>
                        )}
                    />
                </div>
            ),
        },
    ];

    return (
        <div className="">
            <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
                className="tabInformasi"
            />
        </div>
    );
};

export default TabInformasi;