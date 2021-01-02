import {PipeTransform, Pipe} from '@angular/core';
import { Driver } from './driver';

@Pipe({
    name:'driverFilter'
})

export class DriverDetailsPipe implements PipeTransform{
    transform(drivers: Driver[], searchText:string): Driver[]
    {
        if(!drivers || !searchText){
            return drivers;
        }

        return drivers.filter(driver =>
            driver.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
            
    }
}