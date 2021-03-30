import axios from 'axios';
import { flushSync } from 'react-dom';

class AddProductService{

    add(productName,
        productBrand,
        battery,
        camera,
        weight,
        cpu,
        display,
        image,
        memory,
        price,
        productColor,
        stock){

            
    const fd=new FormData();
    fd.append('productName',productName);
    fd.append('productBrand',productBrand);
    fd.append('battery',battery);
    fd.append('camera',camera);
    fd.append('weight',weight);
    fd.append('cpu',cpu);
    fd.append('display',display);
    fd.append('image',image);
    fd.append('memory',memory);
    fd.append('price',price);
    fd.append('productColor',productColor);
    fd.append('stock',stock);

    return axios.post("http://localhost:8080/mobilestore/product/add",fd)
      .then(response => {
       
           
        return response;
      });

    }


}
export default new AddProductService();