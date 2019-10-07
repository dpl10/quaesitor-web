/* imports from node_modules */
import { Component, OnInit } from '@angular/core';
/* imports from app */
import { QuaesitorService } from '../quaesitor.service';
@Component({
	selector: 'app-quaesitor',
	templateUrl: './quaesitor.component.html',
	styleUrls: ['./quaesitor.component.scss']
})
export class QuaesitorComponent implements  OnInit {
	public inputText: string;
	public outputText: string;
	constructor(private quaesitor: QuaesitorService){
	}
	ngOnInit(){
	}
	public async processText(): Promise<boolean> {
		if(this.inputText === undefined){
console.log('input erorr');
// do something
			return(true);
		} else {
			const o = await this.quaesitor.extractSpecies(this.inputText, true);
			this.outputText = '<li>' + o.join('</li><li>') + '</li>';
			return(false);
		}
	}
}
