import { Pipe, PipeTransform } from '@angular/core';
import { Survey } from 'src/app/models/survey';

@Pipe({
    name: 'searchByName'
})
export class SearchByName implements PipeTransform {
    transform(surveys: Survey[], name: string): any {

      return surveys.filter(survey => survey.name.toLowerCase().indexOf(name) !== -1);
    }
}
