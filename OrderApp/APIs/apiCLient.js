import { create } from "apisauce";

const apiClient = create({
    baseURL : "https://woo-commerce-api.codelab.host",
    keys:{
        consumer_key: "ck_67c4f2e80d05dabd215ba9ca3e79e74a1f52f93d",
        consumer_secret: "cs_e87b12fe2b67e5f693f83b567a763c5e5237f525",
    }
});

export default apiClient;