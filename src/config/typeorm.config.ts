import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Question } from 'src/questions/entities/question.entity';


export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'compiler_questions_db',
  entities: [Question],
  synchronize: true
};