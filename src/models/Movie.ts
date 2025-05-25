import {
	Model,
	Table,
	Column,
	DataType,
	PrimaryKey,
	AutoIncrement,
	AllowNull,
} from 'sequelize-typescript';

@Table({ tableName: 'Movies' })
export class Movie extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.INTEGER)
	id!: number;

	@AllowNull(false)
	@Column(DataType.STRING(100))
	title!: string;

	@AllowNull(false)
	@Column(DataType.STRING(500))
	description!: string;

	@AllowNull(false)
	@Column(DataType.STRING(100))
	genre!: string;

	@AllowNull(false)
	@Column(DataType.INTEGER)
	rating!: number;

	@AllowNull(false)
	@Column(DataType.STRING(100))
	director!: string;

	@AllowNull(false)
	@Column(DataType.INTEGER)
	release_year!: number;

	@AllowNull(false)
	@Column(DataType.INTEGER)
	duration_in_secs!: number;
}
