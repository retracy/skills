import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'join'
})
export class JoinPipe implements PipeTransform {
    transform(value: string[], character: string): string {
        return value.join(character);
    }
}