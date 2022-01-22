import { HttpService, Injectable } from '@nestjs/common';
import { delay, map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) { }

  testcasePass=0

  PostCode(CodetoRun) {

    return this.httpService.post('https://codexweb.netlify.app/.netlify/functions/enforceCode', {

      code: CodetoRun.code,
      language: CodetoRun.language,
      input: CodetoRun.input

    }).pipe(
      map(response => response.data),
    );
  }


  async submitCode(codetoSubmit) {
    this.testcasePass=0


    this.testcase1(codetoSubmit)
    this.testcase2(codetoSubmit)

    await this.sleep(10000);
   
    
    

    return this.testcasePass;
  }


  async testcase1(codetoSubmit){

    let output1 = await this.httpService.post('https://codexweb.netlify.app/.netlify/functions/enforceCode', {

      code: codetoSubmit.code,
      language: codetoSubmit.language,
      input: codetoSubmit.question_answers.test_input1.split(" ").join("\n")

    }).pipe(
      map(response => response.data)
    );

    await this.sleep(5000);
    output1.subscribe(x => {

          
      if (Number(x.output) == Number(codetoSubmit.question_answers.test_output1)){
              
          this.testcasePass++;
           
      }
    });


  }




  async testcase2(codetoSubmit){

    
    let output2 = await this.httpService.post('https://codexweb.netlify.app/.netlify/functions/enforceCode', {

      code: codetoSubmit.code,
      language: codetoSubmit.language,
      input: codetoSubmit.question_answers.test_input2.split(" ").join("\n")

    }).pipe(
      map(response => response.data),
    );
    await this.sleep(5000);
    
    output2.subscribe(x => {

           
      if (Number(x.output) == Number(codetoSubmit.question_answers.test_output2)) {
        
        this.testcasePass++;
          
      }
    });

    

  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}


