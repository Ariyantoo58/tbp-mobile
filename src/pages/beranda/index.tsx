import { Card, Flex } from 'antd';
import moment from "moment";
import 'moment/locale/id';
import ListPengajuanCuti from './components/ListPengajuan';

const Beranda = () => {
    moment.locale('id');

    return (
        <div className='mt-5 mx-5'>
            <Card
            className='mb-5'
                style={{
                    backgroundColor: 'rgba(244, 100, 48, 1)'
                }}
            >
                <Flex vertical>
                    <div className="text-white font-bold text-base mb-6">{moment().format("DD MMMM YYYY")}</div>
                    <div className="text-white text-lg">Selamat Datang Kembali,</div>
                    <div className="text-white text-xl font-bold">Fawwaz Hudzalfah Saputra</div>
                </Flex>
            </Card>

            <ListPengajuanCuti />
        </div>
    );
}

export default Beranda;