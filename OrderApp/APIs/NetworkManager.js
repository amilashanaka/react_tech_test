import apiClient from '../APIs/apiCLient';
import Endpoints from '../APIs/Endpoints';

const baseUrl = "https://woo-commerce-api.codelab.host";
const ck = "ck_67c4f2e80d05dabd215ba9ca3e79e74a1f52f93d";
const cs = "cs_e87b12fe2b67e5f693f83b567a763c5e5237f525";

//  get productList
const getProdList = () => {

    return fetch(baseUrl + Endpoints.getProductLists + "consumer_key=" + ck + "&consumer_secret=" + cs , {
       method : 'GET',
       headers: {
          Accept : 'application/json',
          'Content-Type': 'application/json',
       }
    })
    .then((response) => response.json())
    .then((json) => {
       return json;
    })
    .catch((error) => {
       console.error(error);
    });
};

//  get product details
const getProductDetails = (prodId) => {

    return fetch(baseUrl + Endpoints.getProductDetails + prodId + "?consumer_key=" + ck + "&consumer_secret=" + cs ,{
       method : 'GET',
        headers: {
           Accept : 'application/json',
           'Content-Type': 'application/json',
        }
    })
    .then((response) => response.json())
     .then((json) => {
        return json;
     })
     .catch((error) => {
        console.error(error);
     });
 };
 
 const getProductList = () => apiClient.get(Endpoints.getProductLists);

 export default {
    getProductList,
    getProdList,
    getProductDetails,
 };