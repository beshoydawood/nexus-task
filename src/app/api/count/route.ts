import { type NextRequest } from 'next/server'
import {data} from '../data';
import {countCountries} from "../../../utils/countCountries";

export async function GET(req: NextRequest) {
    const online = data.filter( (unit) => {
        return unit.status === 'Online';
    } );
    const offline = data.length - online.length;

    return Response.json({
        online: online.length,
        offline: offline,
        total: data.length,
        countries: countCountries(data)
    });
}