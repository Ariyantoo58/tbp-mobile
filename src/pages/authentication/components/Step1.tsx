import React from "react";
import { Button, Flex, Image } from "antd";
import { useNavigate } from "react-router-dom";

import HeroLogin from "../../../assets/svg/HeroLogin.svg";

const StepOne: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Flex justify="center" align="center" vertical style={{ height: "100vh" }}>
			<Image src={HeroLogin} preview={false} />
			<Flex className="mt-7 mx-12" vertical justify="center" align="center">
				<h1 className="font-bold text-xl">Selamat Datang!👐</h1>
				<p className="text-justify text-base mt-2 text-gray-500">
					Masukkan akun anda untuk mengakses aplikasi. Jangan khawatir, kami
					akan menjaga informasi anda tetap aman.
				</p>
				<Button
					className="mt-7"
					size="large"
					style={{
						backgroundColor: "rgba(226, 76, 77, 1)",
						borderColor: "rgba(226, 76, 77, 1)",
						color: "white",
						width: "100%",
					}}
					onClick={() => navigate("/verifyone")}
				>
					Lanjut
				</Button>
			</Flex>
		</Flex>
	);
};

export default StepOne;
