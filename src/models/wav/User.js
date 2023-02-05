const user = (sequelize, DataTypes) => {
    const User = sequelize.define(
      'user',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
          type: DataTypes.STRING,
          unique: true,
          validate: {
            not: ["[ ]", 'i'],
            len: [3,10],
            notNull: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          validate: {
            not: ["[ ]", 'i'],
            len: [3,10],
            notNull: true,
          },
        },
      },
      {
        timestamps: true,
        freezeTableName: true,
      }
    );
  
    User.sync();
    return User;
  };
  
  export default user;