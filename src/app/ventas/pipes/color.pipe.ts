import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'color'
})

export class ColorPipe implements PipeTransform{
    
    transform(value: any, ...args: any[]) {
        throw new Error('Method not implemented.');
    }

}