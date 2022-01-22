import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne, JoinTable } from 'typeorm';
 
@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  question: string;
 
  @Column()
  question_sum: string;
 
  @Column()
  samp_input: string;

  @Column()
  samp_output: string;

  @Column()
  test_input1: string;

  @Column()
  test_output1: string;

  @Column()
  test_input2: string;

  @Column()
  test_output2: string;
 
}