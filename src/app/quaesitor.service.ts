/* imports from node_modules */
import { Quaesitor } from 'quaesitor'
import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root'
})
export class QuaesitorService {
	private loaded: boolean = false;
	private quaesitor: Quaesitor;
	constructor(){
		this.load();
	}
	public async extractSpecies(x: string, h: boolean): Promise<Array<string>> {
		if(this.loaded === true){
			return(this.quaesitor.extractSpecies(x, h));
		} else if(await this.reCheck(60000) === true){
			return(this.quaesitor.extractSpecies(x, h));
		} else {
			console.error('Could not load quaesitor after 60 seconds!');
			return(['']);
		}
	}
	private load(): void {
		this.quaesitor = new Quaesitor();
		this.quaesitor.loadClassifiers().then((): void => {
			this.loaded = true;
		});
	}
	private async reCheck(ms: number): Promise<boolean> {
		if(await this.timeout(10) === true){
			return(true);
		} else if((ms-10) < 0){
			return(false);
		} else {
			return(this.reCheck(ms-10));
		}
	}
	private timeout(ms: number): Promise<boolean> {
		return(new Promise(resolve => setTimeout(resolve, ms, this.loaded)));
	}
}
