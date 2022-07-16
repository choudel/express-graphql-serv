import { Sequelize, DataTypes } from "sequelize";
import _ from 'lodash'
import casual from "casual";

const sequelize = new Sequelize('categories', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    operatorsAliases: false

})


const Categories = sequelize.define('categories', {
    
    name: {
        type: Sequelize.DataTypes.STRING},
    description:{type: Sequelize.DataTypes.STRING},
    price:{type: Sequelize.DataTypes.INTEGER},
    soldout:{type: Sequelize.DataTypes.STRING},
    inventory:{type: Sequelize.DataTypes.INTEGER},
    stores:{type: Sequelize.DataTypes.STRING}

})
Categories.sync({ force: true }).then(
    () => {
        _.times(5, (i) => {
            Categories.create(
                {
                    name: casual.word,
                    description: casual.sentence,
                    price: casual.numerify,
                    soldout: 'SOLDOUT',
                    inventory: casual.numerify,
                    stores: "annaba"
                }
            )
        })
    }
)
export { sequelize, Categories }
