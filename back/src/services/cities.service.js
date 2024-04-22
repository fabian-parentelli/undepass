const provinces = async () => {
    const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    const result = content.provincias.map(prov => ({
        name: prov.nombre === 'Ciudad Autónoma de Buenos Aires' ? 'CABA' :
            (prov.nombre === 'Tierra del Fuego, Antártida e Islas del Atlántico Sur' ? 'Tierra del Fuego' : prov.nombre),
        id: prov.id
    }));
    return { status: 'success', result };
};

const town = async (id) => {
    const response = await fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${id}&max=500&campos=nombre`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const result = await response.json();
    return { status: 'success', result };
};

const parties = async (tid, pid) => {
    let data = `https://apis.datos.gob.ar/georef/api/localidades?provincia=${pid}&municipio=${tid}&campos=nombre&max=135`;
    const response = await fetch(data, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    const content = await response.json();
    return { status: 'success', result: content.localidades }
};

const getProvince = async (id) => {
    const data = `https://apis.datos.gob.ar/georef/api/provincias?id=${id}&campos=nombre`;
    const response = await fetch(data, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    return content.provincias[0].nombre;
};

const getParties = async (id) => {
    const data = `https://apis.datos.gob.ar/georef/api/municipios?id=${id}&campos=nombre`;
    const response = await fetch(data, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    return content.municipios[0].nombre;
};

const coordinates = async (data) => {
    let muni
    if (data.province === '02') muni = 'caba'
    else {
        const municipality = await getParties(data.municipality);
        muni = municipality.toLowerCase().replace(/ /g, '+');
    };
    const params = {
        q: muni + '+' + data.address.replace(/ /g, '+'),
        format: 'json',
        addressdetails: 'addressdetails',
        countrycodes: 'AR'
    };
    const queryString = new URLSearchParams(params).toString();
    const nominatim = `https://nominatim.openstreetmap.org/search?`;
    const response = await fetch(`${nominatim}${queryString}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if (!content) return { status: 'error', error: 'No se encuentra tu dirección comunicate con nosotros' };
    const coordinates = { lat: content[0].lat, lon: content[0].lon };
    return { status: 'success', coordinates };
};

const coordSearch = async (data) => {


    const params = {
        q: data.address.replace(/ /g, '+'),
        format: 'json',
        addressdetails: 'addressdetails',
        countrycodes: 'AR'
    };
    const queryString = new URLSearchParams(params).toString();
    const nominatim = `https://nominatim.openstreetmap.org/search?`;
    const response = await fetch(`${nominatim}${queryString}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if (!content) return { status: 'error', error: 'No se encuentra tu dirección comunicate con nosotros' };
    return { status: 'success', content };
};

export { provinces, parties, town, getProvince, getParties, coordinates, coordSearch };