import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {

  constructor(@InjectRepository(Question) private questionRepo: Repository<Question>) {}

  create(newQuestion) {
    this.questionRepo.insert(newQuestion)
  }

  findAll(): Promise<Question[]> {
    return this.questionRepo.find();
  }
  

  findOne(id: number):Promise<Question> {
    return this.questionRepo.findOne(id);
  }

  update(id:number, UpdateQuestion) {
    this.questionRepo.update(UpdateQuestion.id,UpdateQuestion);
  }

  remove(id: number) {
    this.questionRepo.delete(id);
  }
}
