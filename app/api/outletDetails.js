import client from './client';

const endpoint = '/outletDetails';

const getOutletDetails = () => client.get(endpoint);

export default {
    getOutletDetails,
};