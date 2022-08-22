import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Tweets {
	
    @PrimaryGeneratedColumn()
    tweet_id: number

    @Column()
    tweet_owner_id: number

    @Column()
    tweet_text: string

    @Column()
    tweet_time: number
}