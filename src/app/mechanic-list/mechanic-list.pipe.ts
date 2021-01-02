import {PipeTransform, Pipe} from '@angular/core';
import { Mechanic } from './mechanic';

@Pipe({
    name:'mechanicFilter'
})

export class MechanicListPipe implements PipeTransform{
    transform(mechanics: Mechanic[], searchText:string): Mechanic[]
    {
        if(!mechanics || !searchText){
            return mechanics;
        }

        return mechanics.filter(mechanic =>
            mechanic.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
            
    }
}