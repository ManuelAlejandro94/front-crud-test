import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

export async function getClients () {
    try {
        const response = await axios({
            url: `${baseUrl}`,
            method: 'GET'
        })

        return response
    } catch (e) {
        console.log(e)
    }
}

export async function saveClient (clientData) {
    try {
        const statusValue = await selectValues(clientData.status)

        const dataJson = {
            'firstName': clientData.name.toUpperCase(),
            'lastName': clientData.lastName.toUpperCase(),
            'phone': clientData.phone,
            'email': clientData.email,
            'age': clientData.age,
            'status': statusValue
        }

        const response = await axios({
            url: `${baseUrl}`,
            method: 'POST',
            data: dataJson,
        })

        return response
    } catch (e) {
    console.log(e)
    }
}

export async function editClient (clientData) {
    try {
        const statusValue = await selectValues(clientData.status)

        const dataJson = {
            'firstName': clientData.name.toUpperCase(),
            'lastName': clientData.lastName.toUpperCase(),
            'phone': clientData.phone,
            'email': clientData.email,
            'age': clientData.age,
            'status': statusValue
        }

        const response = await axios({
            url: `${baseUrl}/${clientData.id}`,
            method: 'PUT',
            data: dataJson,
        })

        return response
    } catch (e) {
        console.log(e)
    }
}

export async function deleteClient (id) {
    try {
        const response = await axios({
            url: `${baseUrl}/delete/${id}`,
            method: 'PUT'
        })
        return response
    } catch (e) {
        console.log(e)
    }
}

export async function selectValuesToOption (value) {
    const values = [
        'Nuevo',
        'No interesado',
        'Número equivocado',
        'Información equivocada',
        'Alto potencial',
        'Bajo potencial'
    ]

    for(let i = 0; i<values.length; i++){
        if(values[i] === value){
            return i
        }
    }

    return 0
}

async function selectValues (value) {
    const values = [
        'Nuevo',
        'No interesado',
        'Número equivocado',
        'Información equivocada',
        'Alto potencial',
        'Bajo potencial'
    ]

    return values[value]
}
