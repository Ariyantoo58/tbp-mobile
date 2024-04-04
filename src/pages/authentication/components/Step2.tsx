import React, { ChangeEvent } from "react";
import { Button, Flex, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setStepTwo } from "../../../redux/reducer/AuthReducer";

const StepTwo: React.FC = () => {
	const [email, setEmail] = React.useState<string>("");
	const [isValid, setIsValid] = React.useState<boolean>();
	const [isNull, setIsNull] = React.useState<boolean>();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const validateEmail = (email: string): boolean => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target;

		setEmail(value);
		setIsValid(validateEmail(value));
	};

	const handleClick = () => {
		if (email === "") {
			setIsNull(true);
		} else {
			setIsNull(false);
			dispatch(setStepTwo(email));
			navigate("/verifytwo");
			// if (isValid)
		}
	};

	return (
		<>
			<Flex align="center" vertical style={{ height: "100vh" }}>
				<Flex className="mt-7 mx-8" vertical justify="center" align="center">
					<h1 className="font-bold text-xl">Selamat Datang!👐</h1>
					<p className="text-justify text-base mt-2 text-gray-500">
						Masukkan email anda untuk mengakses aplikasi. Jangan khawatir, kami
						akan menjaga informasi anda tetap aman.
					</p>

					<Input
						type="email"
						className={
							(email !== "" && !isValid) || isNull
								? "mt-5 border-red-500"
								: "mt-5"
						}
						placeholder="Masukkan email anda"
						size="large"
						onChange={handleChange}
						value={email}
					/>
					<div className="text-left w-full mb-5 mt-1">
						{email !== "" && !isValid && (
							<p className="text-red-500 text-xs">
								Email yang anda masukkan tidak valid
							</p>
						)}
						{isNull && (
							<p className="text-red-500 text-xs">Harap masukkan email anda</p>
						)}
					</div>

					<Button
						size="large"
						onClick={handleClick}
						style={{
							backgroundColor: "rgba(226, 76, 77, 1)",
							borderColor: "rgba(226, 76, 77, 1)",
							color: "white",
							width: "100%",
						}}
					>
						Lanjut
					</Button>
				</Flex>
			</Flex>
		</>
	);
};

export default StepTwo;
