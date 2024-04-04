import axios from "axios";

export const serviceGetProcedure = async (npk: any, tahun: any) => {
	const configurationObject = {
		method: "GET",
		url: `https://api.tbp-mobile.co.id/api/v1/testing/procedure?npk=${npk}&tahun=${tahun}`,
	};
	try {
		const response = await axios(configurationObject);

		return response;
	} catch (error) {
		return error;
	}
};
