import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema';
import resolvers from './data/resolvers'
import { Categories } from './data/dbConnectors';
const app = express();

app.get('/', (req,res)=>{
    res.send('graphQL is amazing!');
});


const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql:true,
}))
app.listen(8080,()=> console.log('Running server on port localhost:8080/graphql'))
