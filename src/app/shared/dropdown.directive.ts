import { 
    Directive, 
    OnInit, 
    HostListener,
    HostBinding  } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

    constructor(){ }
    
    isOpen = false;

    @HostListener('click') toogleOpen() {
        this.isOpen = !this.isOpen;
    }
    @HostBinding('class.open') isOpen = false;

    ngOnInit() {
    }
    

}