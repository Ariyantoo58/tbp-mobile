import { Avatar, Flex } from "antd";
import { UserOutlined } from '@ant-design/icons';

const Header = () => {
    return (
        <Flex
            className="border p-4"
            style={{
                backgroundColor: "rgba(52, 52, 52, 0.65)"
            }}
        >
            <Avatar size={64} icon={<UserOutlined />} />
            <Flex vertical>
                <span className="ml-4 mt-1 text-white font-bold text-lg">
                    Fawwaz Hudzalfah Saputra
                </span>
                <span className="ml-4 mt-1 text-white text-base">
                    Fullstack Developer
                </span>
            </Flex>
        </Flex>
    );
};

export default Header;