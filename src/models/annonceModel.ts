export class annonceModel{
     categorie : String;
     prix:Number;
     description : String;
     auteurId:String;
     photos:[{
         photoUrl:String;
         phototitle:String;
     }];

     constructor(){
         this.photos= [{photoUrl:null,phototitle:null}]
     }

}