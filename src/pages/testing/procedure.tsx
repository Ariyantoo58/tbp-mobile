import React, { useEffect } from "react";
import {
	Button,
	Card,
	Col,
	Flex,
	Form,
	Image,
	Input,
	Row,
	Spin,
	Table,
} from "antd";
import { useNavigate } from "react-router-dom";
import { serviceGetProcedure } from "../../service/api/testing";

const Procedure: React.FC = () => {
	const [npk, setNpk] = React.useState<any>(null);
	const [tahun, setTahun] = React.useState<any>(null);
	const [loading, setLoading] = React.useState<Boolean>(false);

	const getProcedure = async () => {
		setLoading(true);
		try {
			const response = await serviceGetProcedure(npk, tahun);
			console.log(response, "responseee");
			setLoading(true);
		} catch (error) {
			console.log(error);
			setLoading(true);
		}
	};

	const handleSubmit = () => {
		getProcedure();
	};

	return (
		<div>
			<Card>
				<Row>
					<Col>
						<Card>
							<Form
								className="mb-5"
								// onSubmit={handleSubmit(onSubmit)}
								// ref={formRef}
							>
								<Input
									name="npk"
									placeholder="Masukkan NPK"
									type="text"
									onChange={(e) => setNpk(e.target.value)}
								/>

								<Input
									name="tahun"
									placeholder="Masukkan Tahun"
									type="text"
									onChange={(e) => setTahun(e.target.value)}
								/>

								<Button color="primary" onClick={handleSubmit}>
									{loading ? "...LOADING" : "Submit"}
								</Button>
							</Form>

							<Table bordered>
								<thead>
									<tr>
										<th>JENIS</th>
										<th>JAN</th>
										<th>FEB</th>
										<th>MAR</th>
										<th>APR</th>
										<th>MEI</th>
										<th>JUN</th>
										<th>JUL</th>
										<th>AUG</th>
										<th>SEP</th>
										<th>OKT</th>
										<th>NOV</th>
										<th>DES</th>
										<th>TOTAL</th>
									</tr>
								</thead>
								<tbody>
									{/* {res?.map((e, i) => (
												<tr key={i}>
													<td align="center">
														{e?.JENIS !== null ? e?.JENIS : "-"}
													</td>
													<td align="center">
														{e?.JAN !== null ? e?.JAN : "-"}
													</td>
													<td align="center">
														{e?.FEB !== null ? e?.FEB : "-"}
													</td>
													<td align="center">
														{e?.MAR !== null ? e?.MAR : "-"}
													</td>
													<td align="center">
														{e?.APR !== null ? e?.APR : "-"}
													</td>
													<td align="center">
														{e?.MEI !== null ? e?.MEI : "-"}
													</td>
													<td align="center">
														{e?.JUN !== null ? e?.JUN : "-"}
													</td>
													<td align="center">
														{e?.JUL !== null ? e?.JUL : "-"}
													</td>
													<td align="center">
														{e?.AUG !== null ? e?.AUG : "-"}
													</td>
													<td align="center">
														{e?.SEP !== null ? e?.SEP : "-"}
													</td>
													<td align="center">
														{e?.OKT !== null ? e?.OKT : "-"}
													</td>
													<td align="center">
														{e?.NOV !== null ? e?.NOV : "-"}
													</td>
													<td align="center">
														{e?.DES !== null ? e?.DES : "-"}
													</td>
													<td align="center">
														{e?.TOTAL !== null ? e?.TOTAL : "-"}
													</td>
												</tr>
											))} */}
								</tbody>
							</Table>
						</Card>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default Procedure;
