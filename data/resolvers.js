import { reject } from 'lodash';
import {Categories} from './dbConnectors'

export const resolvers ={
    getProducts: async ()=> {
        
        
    },
    createProduct: ({input})=>{
       const newWidget= new Categories({
        name:input.name,
        description:input.description,
        price:input.price,
        soldout:input.soldout,
        inventory:input.inventory,
        stores:input.stores,
       });
       newWidget.id=newWidget._id

    }
}
console.log (resolvers.getProducts({id:1}))
export default resolvers;