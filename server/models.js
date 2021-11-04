//テーブルの定義
import Sequelize from "sequelize";

const { DataTypes } = Sequelize;

const url =
  process.env.DATABASE_URL ||
  "postgres://iasfmglctvciqb:cf9f93107f08a3c899a02d4f0f9c566c9faf795ff69bb82f9429879b93547c61@ec2-23-23-164-251.compute-1.amazonaws.com:5432/dd73al92gg0h41";
export const sequelize = new Sequelize(url,
{
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // ★このように書いてこのプロパティを追加
    }
  },
});
  // DBにSSL接続する


export const User = sequelize.define(
  "user",
  {
    sub: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true },
);

export const Restaurant = sequelize.define(
  "restaurant",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    map: {
      type: DataTypes.TEXT,
    },
  },
  { underscored: true },
);

export const Review = sequelize.define(
  "review",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
      },
    },
    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Restaurant,
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true },
);

//最後にテーブル間の関係
Restaurant.hasMany(Review);
Review.belongsTo(Restaurant);
User.hasMany(Review);
Review.belongsTo(User);
