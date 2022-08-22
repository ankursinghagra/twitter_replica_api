import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Users {
	
    @PrimaryGeneratedColumn()
    users_id: number

    @Column()
    users_email_address: string

    @Column()
    users_password_hash: string

    @Column()
    users_first_name: string

    @Column()
    users_last_name: string

    @Column()
    users_active: number
}