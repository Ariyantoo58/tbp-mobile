import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { HomeOutlined, FileTextOutlined, QuestionOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from "react-router-dom";
import { setDrawer, setTitle } from "../../../redux/reducer/GlobalReducer";
import { useDispatch, useSelector } from "react-redux";
import '../../../assets/scss/global.scss';

type MenuItem = Required<MenuProps>['items'][number];

const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { drawer } = useSelector((state: any) => state.global);

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group'
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type
        } as MenuItem;
    }

    const items: MenuProps['items'] = [
        getItem('Beranda', '/beranda', <HomeOutlined />),
        getItem('Lihat Laporan', '/laporan', <FileTextOutlined />),
        getItem('Pengajuan Cuti', '/approval', <QuestionOutlined />),
        { type: 'divider' },
        getItem('Informasi Personal', '/informasi-personal', <UserOutlined />)
    ];

    const onClick = ({ key }: { key: React.Key }) => {
        const clickedItem = items.find(item => item?.key === key);

        if (clickedItem) {
            if ('label' in clickedItem) {
                dispatch(setTitle(clickedItem.label));
            }

            if (typeof clickedItem.key === 'string') navigate(clickedItem.key);
        }

        dispatch(setDrawer(!drawer));
    };

    return (
        <Menu
            onClick={onClick}
            defaultSelectedKeys={['/beranda']}
            selectedKeys={[location.pathname]}
            mode="inline"
            items={items}
        />
    );
}

export default Sidebar;