/* imports from node_modules */
import { Classifiers, Quaesitor } from 'quaesitor/dist/quaesitor-broswer'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const headers = new HttpHeaders({
	Accept: 'application/x-protobuf'
});
@Injectable({
	providedIn: 'root'
})
export class QuaesitorService {
	private loaded: boolean = false;
	private classifiers: Classifiers;
	private quaesitor: Quaesitor;
	constructor(private httpClient: HttpClient){
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
	private async getPBF(x: 'bf'|'ecnn'|'lcnn'|'pdffnn'): Promise<ArrayBuffer> {
		return(await this.httpClient.get<ArrayBuffer>('assets/' + x +'.pbf', {
			headers,
			responseType: 'arraybuffer' as 'json' /* "as 'json'" needed because of "get<ArrayBuffer>" */
		}).toPromise());
	}
	private load(): void {
		this.classifiers = new Classifiers();
		Promise.all([
			this.getPBF('bf'),
			this.getPBF('ecnn'),
			this.getPBF('lcnn'),
			this.getPBF('pdffnn')
		]).then((x: Array<ArrayBuffer>): void => {
			this.classifiers.bf = x[0];
			this.classifiers.ecnn = new Uint16Array(x[1]); /* tensorflowjs_converter --quantization_bytes 2 */
			this.classifiers.lcnn = new Uint16Array(x[2]); /* tensorflowjs_converter --quantization_bytes 2 */
			this.classifiers.pdffnn = new Uint16Array(x[3]); /* tensorflowjs_converter --quantization_bytes 2 */
			this.quaesitor = new Quaesitor();
			this.quaesitor.loadClassifiers(this.classifiers).then((): void => {
				this.loaded = true;
			});
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
