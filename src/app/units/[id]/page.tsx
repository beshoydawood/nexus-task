import Main from '../../../layout/Main';
import UnitData from "../../../components/Unit";

export const metadata = {
    title: 'PV Units',
    description: 'Generated by Next.js',
}
async function getData(id: number|string) {
    const uri = process.env.API_URI;
    const data = await fetch(uri+'/api?id='+id);
    return await data.json();
}

export default async function Unit({ params }: { params: { id: number|string } }) {
    const unit = await getData(params.id);
    return(
        <Main title={`Unit: ${unit.name}`}>
            <UnitData unit={unit} />
        </Main>
    )
}