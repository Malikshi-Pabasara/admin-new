import {PipeTransform, Pipe} from '@angular/core';
import { Servicecenter } from "./servicecenter";

@Pipe({
    name:'servicecenterFilter'
})

export class ServicecenterListPipe implements PipeTransform{
    transform(servicecenters: Servicecenter[], searchText:string): Servicecenter[]
    {
        if(!servicecenters || !searchText){
            return servicecenters;
        }

        return servicecenters.filter(servicecenter =>
            servicecenter.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
            
    }
}