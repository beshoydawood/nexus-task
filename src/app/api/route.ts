import { type NextRequest } from 'next/server'
import {data} from './data';

export async function GET(req: NextRequest) {
    const parms: any = req.nextUrl.searchParams;
    let d = data
    if( parms.get('country') ) {
        d =  data.filter( (item) => {
            return item.location === parms.get('country');
        } )
    }
    if( parms.get('id') ) {
        d =  data.filter( (item) => {
            return item.id === parseInt(parms.get('id'));
        } );

        return d.length ? Response.json(d[0]) : Response.json([]);
    }
    return Response.json(d);
}