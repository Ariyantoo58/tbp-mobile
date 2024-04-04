import React from 'react';
import {
    MenuOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Layout, Button, Drawer, Flex } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { setDrawer, setTitle } from '../../../redux/reducer/GlobalReducer';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import Modal from '../../ui/Modal';

const { Header } = Layout;

const MainLayout: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { drawer, title } = useSelector((state: any) => state.global);
    const [open, setOpen] = React.useState<boolean>(false);

    const toggle = () => dispatch(setDrawer(!drawer));

    return (
        <Layout
            style={{
                backgroundColor: "white"
            }}
        >
            <Drawer
                title="HRIS PT. TRIMITRA"
                placement={'left'}
                closable={false}
                onClose={toggle}
                open={drawer}
                key={'left'}
                styles={{
                    body: {
                        padding: 0
                    }
                }}
            >
                <Sidebar />
            </Drawer>

            <Header style={{ padding: 0, background: 'white' }} className='shadow-md'>
                <Flex justify='space-between'>
                    <Button
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={toggle}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div
                        style={{
                            fontSize: '20px',
                            fontWeight: 'bold'
                        }}
                    >
                        {location.pathname === '/approval-form' ? 'Detail Pengajuan Cuti' : title ? title : "Beranda"}
                    </div>
                    <Button
                        type="text"
                        icon={<LogoutOutlined />}
                        onClick={() => setOpen(!open)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Flex>
            </Header>

            <Modal
                open={open}
                setOpen={setOpen}
                title='Logout Account'
                onClick={() => {
                    setOpen(!open)
                    dispatch(setTitle(""));
                    navigate('/signin');
                }}
                okButtonProps={{
                    size: 'large',
                    className: "font-bold",
                    style: {
                        backgroundColor: "rgba(52, 52, 52, 1)",
                        borderColor: "rgba(52, 52, 52, 1)",
                        color: "white"
                    }
                }}
                cancelButtonProps={{
                    size: 'large',
                    className: "font-bold",
                    style: {
                        backgroundColor: "rgba(230, 230, 230, 1)",
                        borderColor: "rgba(230, 230, 230, 1)",
                        color: "rgba(103, 103, 103, 1)"
                    }
                }}
            >
                <span className='text-justify text-lg'>
                    Apakah anda yakin untuk keluar dari akun
                    ini? Ketika anda logout, anda perlu login
                    kembali.
                </span>
            </Modal>

            <div>
                <Outlet />
            </div>
        </Layout>
    );
};

export default MainLayout;