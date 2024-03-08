import Main from '../../layout/Main';
import DataTable from "../../components/DataTable";
import {getCountries} from "../../utils/countCountries";

export const metadata = {
    title: 'PV Units',
    description: 'Generated by Next.js',
}
async function getData() {
    const uri = process.env.API_URI;
    const data = await fetch(uri+'/api');
    return await data.json();
}

export default async function Units() {
    const rows = await getData();
    const countries = getCountries(rows);
    return(
        <Main title="PV Units">
            <DataTable countires={countries} rows={rows} />
        </Main>
    )
}