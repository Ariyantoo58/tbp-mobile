import React from "react";
import { Flex } from "antd";
import { Link } from "react-router-dom";
import Absensi from '../../assets/svg/Absensi.svg';
import Lembur from '../../assets/svg/Lembur.svg';
import Cuti from '../../assets/svg/Cuti.svg';
import Pengobatan from '../../assets/svg/Pengobatan.svg';
import Perawatan from '../../assets/svg/Perawatan.svg';
import Kacamata from '../../assets/svg/Kacamata.svg';
import Training from '../../assets/svg/Training.svg';

const Laporan: React.FC = () => {
    return (
        <div className="mt-5 mx-5">
            <Flex vertical>
                <Flex align="center" justify="space-between" className="py-3 mb-3">
                    <Flex align="center" justify="center">
                        <img src={Absensi} alt="Absensi" />
                        <span className="ml-3 text-sm">Laporan Absensi</span>
                    </Flex>
                    <Link to='/'>
                        <span className="text-base">{">"}</span>
                    </Link>
                </Flex>
                <Flex align="center" justify="space-between" className="py-3 mb-3">
                    <Flex align="center" justify="center">
                        <img src={Lembur} alt="Absensi" />
                        <span className="ml-3 text-sm">Laporan Lembur</span>
                    </Flex>
                    <Link to='/'>
                        <span className="text-base">{">"}</span>
                    </Link>
                </Flex>
                <Flex align="center" justify="space-between" className="py-3 mb-3">
                    <Flex align="center" justify="center">
                        <img src={Cuti} alt="Absensi" />
                        <span className="ml-3 text-sm">Laporan Cuti</span>
                    </Flex>
                    <Link to='/'>
                        <span className="text-base">{">"}</span>
                    </Link>
                </Flex>
                <Flex align="center" justify="space-between" className="py-3 mb-3">
                    <Flex align="center" justify="center">
                        <img src={Pengobatan} alt="Absensi" />
                        <span className="ml-3 text-sm">Laporan Pengobatan</span>
                    </Flex>
                    <Link to='/'>
                        <span className="text-base">{">"}</span>
                    </Link>
                </Flex>
                <Flex align="center" justify="space-between" className="py-3 mb-3">
                    <Flex align="center" justify="center">
                        <img src={Perawatan} alt="Absensi" />
                        <span className="ml-3 text-sm">Laporan Perawatan</span>
                    </Flex>
                    <Link to='/'>
                        <span className="text-base">{">"}</span>
                    </Link>
                </Flex>
                <Flex align="center" justify="space-between" className="py-3 mb-3">
                    <Flex align="center" justify="center">
                        <img src={Kacamata} alt="Absensi" />
                        <span className="ml-3 text-sm">Tunjangan Kacamata</span>
                    </Flex>
                    <Link to='/'>
                        <span className="text-base">{">"}</span>
                    </Link>
                </Flex>
                <Flex align="center" justify="space-between" className="py-3 mb-3">
                    <Flex align="center" justify="center">
                        <img src={Training} alt="Absensi" />
                        <span className="ml-3 text-sm">Riwayat Training</span>
                    </Flex>
                    <Link to='/'>
                        <span className="text-base">{">"}</span>
                    </Link>
                </Flex>
            </Flex>
        </div>
    );
};

export default Laporan;