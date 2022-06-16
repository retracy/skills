import { VERSION } from "@angular/core";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

export class SkillsTitlePageStrategy extends TitleStrategy{
    override updateTitle(snapshot: RouterStateSnapshot): void {
        if(snapshot.url.indexOf('bob') != -1){
            document.title = `Bob's Skills ${VERSION.full}`;
        }
        else if(snapshot.url.indexOf('emily') != -1){
            document.title = `Emily's Skills ${VERSION.full}`;
        }
        else{
            document.title = `Our Skills ${VERSION.full}`;
        }
    }
}