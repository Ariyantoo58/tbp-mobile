import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import MainLayout from "./components/shared/layout/MainLayout";
import Beranda from "./pages/beranda";
import InformasiPersonal from "./pages/informasi-personal";
import Login from "./pages/authentication";
import Laporan from "./pages/laporan";
import PengajuanCuti from "./pages/pengajuan-cuti";
import ApprovalForm from "./pages/pengajuan-cuti/components/ApprovalForm";
import StepOne from "./pages/authentication/components/Step1";
import StepTwo from "./pages/authentication/components/Step2";
import StepThree from "./pages/authentication/components/Step3";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/signin" element={<Login />} />

				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/" element={<MainLayout />}>
					<Route path="/beranda" element={<Beranda />} />
					<Route path="/login" element={<StepOne />} />
					<Route path="/verifyone" element={<StepTwo />} />
					<Route path="/verifytwo" element={<StepThree />} />
					<Route path="/informasi-personal" element={<InformasiPersonal />} />
					<Route path="/laporan" element={<Laporan />} />
					<Route path="/approval" element={<PengajuanCuti />} />
					<Route path="/approval-form" element={<ApprovalForm />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
