import { Model, AllowNull, AutoIncrement, Column, NotEmpty, PrimaryKey, Table } from 'sequelize-typescript';

export interface IOrder {
  id: number,
  order: string,
  price: number,
  completed: boolean
}

@Table (
  {
    tableName: "order",
    timestamps: true
  }
)

export default class Order extends Model implements IOrder {

  @AutoIncrement
  @PrimaryKey
  @Column
  id!: number

  @AllowNull(false)
  @NotEmpty
  @Column
  order!: string

  @AllowNull(false)
  @NotEmpty
  @Column
  price!: number

  @AllowNull(false)
  @NotEmpty
  @Column
  completed!: boolean
}