const { Sequelize, DataTypes}  = require('sequelize');
const db = require('/../../config/config');

const Wav = db.define('wavs', {
    name:{
        type: Sequelize.STRING
    },
    owner:{
        type: Sequelize.JSONB
    },
    members:{
        type: Sequelize.JSONB
    },
    description:{
        type: Sequelize.STRING
    },
    access:{
        type: Sequelize.ENUM
    },
    url:{
        type: DataTypes.STRING
    }
})
