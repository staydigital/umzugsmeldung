import { Component, Input, Output, OnInit } from '@angular/core';
import { Vertrag } from '../../model/vertrag';

export class Baseeditor implements OnInit {

    @Input() selectedVertrag: Vertrag;
    
    constructor() { }

    ngOnInit() {
    }

}
