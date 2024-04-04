import React, { ChangeEvent } from "react";
import { Button, Flex, Input } from "antd";
import { useSelector } from "react-redux";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../configs/firebase";

const StepThree: React.FC = () => {
	const [password, setPassword] = React.useState<string>("");
	const [isNull, setIsNull] = React.useState<boolean>();
	const { stepTwo, stepThree } = useSelector((state: any) => state.auth);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		setPassword(value);
		if (value) setIsNull(false);
	};

	const handleClick = () => {
		if (password === "") {
			setIsNull(true);
		} else {
			setIsNull(false);
			signInWithEmailAndPassword(auth, stepTwo, password)
				.then((userCredential) => {
					// Signed up
					console.log(userCredential, "userCreidential");
					const user = userCredential.user;
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// ..
				});
		}
	};

	console.log(stepTwo, "stepTwoo");

	return (
		<>
			<Flex align="center" vertical style={{ height: "100vh" }}>
				<Flex className="mt-7 mx-8" vertical justify="center" align="center">
					<h1 className="font-bold text-xl">Selamat Datang!👐</h1>
					<p className="text-justify text-base mt-2 text-gray-500">
						Masukkan password anda untuk mengakses aplikasi. Jangan khawatir,
						kami akan menjaga informasi anda tetap aman.
					</p>

					<Input.Password
						className={isNull ? "mt-5 border-red-500" : "mt-5"}
						placeholder="Masukkan password anda"
						size="large"
						onChange={handleChange}
						value={password}
					/>
					<div className="text-left w-full mb-5 mt-1">
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

export default StepThree;
