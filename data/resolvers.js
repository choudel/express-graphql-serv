import { categories } from "./dbConnectors";

export const resolvers ={
    
    getProduct: async ({id})=>{
        try{
            const product= await categories.findOne({where:{id:id}})
            return product;
            
        }catch(err){
            console.log(err)
        }
       
    }

    
    
    
}


export default resolvers;