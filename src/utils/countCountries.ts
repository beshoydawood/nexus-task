export const countCountries = (data: any[]) => {
    let countries: any = {};
    data.forEach(function(item) {
        let country = item.location.split(', ')[1];

        if (!countries.hasOwnProperty(country)) {
            countries[country] = true;
        }
    });

    return Object.keys(countries).length;
}
export const getCountries = (data: any[]) => {
    return data.map((item) => {
        return item.location;
    })
}