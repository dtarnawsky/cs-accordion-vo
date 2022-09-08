import { Component } from '@angular/core';

export interface License {
  text: string;
  packageName: string;
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  licenses: Array<License> = [];
  constructor() {
    this.licenses.push(
      {
        packageName: 'Things',
        text: `
      Lorem ipsum dolor sit amet, eu inermis suscipit intellegam sed. Nihil reprehendunt ea quo, choro regione copiosae te sed. Est cibo tota albucius at, ius natum consequat cu, ut cum paulo dicant tacimates. Vim dicit ocurreret in, vix tation mollis similique in. Mel no assentior deseruisse.

      Eos ut laudem instructior. Porro semper principes an eam. Veri homero at mea. Mucius iuvaret no eum, malorum suavitate ad mel. Iusto labitur interpretaris ea sea, qui no esse putent cotidieque, ei vis nibh concludaturque.
      
      Mea soluta propriae et, eu sea nulla homero erroribus. An eum sale dicat, elit semper eu cum, ei ceteros ancillae scribentur nam. Vis doctus ancillae incorrupte no. Te movet inermis ius. Pri illum choro inimicus ne, at alienum adversarium per.
      
      Enim dicat contentiones nam id, et veri concludaturque nam, eam in illum facilis referrentur. Posidonium appellantur cu sed, eros altera cu sed, splendide efficiendi eum in. Facer nullam eam te, rebum idque liber nec et. Referrentur efficiantur cum an, id usu animal fabulas voluptatibus, nemore impetus euripidis an mel. Laoreet legendos disputando ex eam.
      
      Sed eu lorem placerat menandri, tollit scaevola sadipscing no has, labores efficiendi vim ei. An eum iusto corrumpit necessitatibus, ea laudem noluisse pri. Qui putent nominati ea. Ne latine singulis vel, vel ea mundi corpora deleniti. Natum habeo rationibus id vel, qui an paulo theophrastus.
      
      Cu mel novum inermis, cu deseruisse efficiendi vel. Usu ex elit facilis repudiandae. Sed in solum errem laudem. Ut admodum fuisset eos.
      
      Mea iudico aliquip ut. At torquatos gloriatur assueverit sed, no nam erat affert. Cu modus harum vim. Ea modo eruditi vel, zril copiosae ex pri. Has civibus scaevola appellantur ne. Ea nec odio laoreet.
      
      Scriptorem ullamcorper mel id, doctus incorrupte scripserit id per. Dicunt scripserit instructior ei vel, causae explicari no eos, ad alii vocent pri. Ad utamur gubergren prodesset mei, aperiam prodesset ut duo. Illum placerat hendrerit an nec, no mea impedit maiorum eloquentiam. Sit aperiri apeirian at, pro zril viderer ei. Mel no velit iriure periculis, iriure partiendo nec te.
      
      Ea affert verterem nam. Consul insolens atomorum duo in. In appetere patrioque mea, graecis nominati ut vim, quodsi aliquando vituperata at eum. Cu sed odio eirmod, stet erat everti et mel.
      
      Quot nihil primis vis id. Utinam alterum vix in. Vide conceptam quo te, in per dicit aperiri signiferumque. Ad sale gubergren temporibus per, tota argumentum ei quo. An iuvaret euismod vivendo nec.
      
      Id eos inani persecuti, eos ne aperiri invenire. Ne ius errem sapientem. Sea ad assueverit disputando adversarium, aperiri interesset sed eu, sed ad nobis noluisse expetenda. Qui torquatos sententiae et, nec ad sumo probatus, bonorum imperdiet omittantur ei sit.
      
      Sit ei debitis complectitur. Sea te modus deseruisse, mundi eloquentiam interpretaris eu ius. Ea mutat brute volutpat mei, viderer laboramus eu per. At qui habeo dicit, causae noluisse usu ut, qui accusam convenire et. Et sea delenit democritum. Ad libris intellegebat cum, pro persius voluptua ut.
      
      Mentitum singulis ea qui, eu brute munere delenit vel. Cum putant meliore vituperatoribus id, nihil ullamcorper cum te. Modo sententiae qui an, mel cu veniam cetero. Eam no alii summo philosophia. In eos tota admodum menandri. Usu tation latine petentium ne, eam laoreet blandit in.
      
      Labore tacimates argumentum te vim. Apeirian persecuti mel at, est ea recteque maluisset, vitae denique placerat ne nec. Molestiae sententiae ei per, cu aeque reprimique percipitur sea. Discere copiosae persequeris usu te, eum sumo honestatis at.
      
      Brute tantas persius te eum, ne tractatos persequeris usu. Sea ignota regione cu. Vis ei officiis intellegebat, an has fastidii expetenda suscipiantur, bonorum persequeris ut eos. Graece virtute vix ne, ex vidit virtute debitis quo, qui ad veri utinam iracundia. Id sed solet debitis persecuti, ei solet corpora eam, qui dictas explicari at.
      
      Errem tation nam cu, nec ad quot pertinax, sanctus disputando mei et. At est graecis quaestio suscipiantur, solet voluptua his in. Libris percipitur eam te, mea eu case feugiat. Vis ei discere fuisset elaboraret, adhuc doming pri an. Adhuc pertinax torquatos an mei.
      
      Ex accusam adipisci complectitur sit, quem eleifend deseruisse eam te. Veniam legimus delicatissimi eu vix, dolores expetenda repudiandae ad per. Usu in posse debitis scribentur, eum ne integre necessitatibus. Qui nisl sapientem ex, ad his vitae repudiandae, ei justo latine nam.
      
      Esse tollit nostro ea cum. Eum elitr dolorum alienum ne, te alii vide sensibus mei. Te duo tota fugit ponderum, ei eam idque omnium honestatis, mel id everti aperiam. In mei vivendo torquatos appellantur, oportere assentior quo ut, qui ad congue munere.
      
      Eum tota detraxit singulis ei, ut alii assueverit appellantur sed. Usu aeterno delectus facilisi et, per fuisset probatus ad. An est autem temporibus. Audire persecuti contentiones mel at, at amet gubergren vix. Etiam simul in vis, id usu porro iudico dolorem, eum nemore detraxit electram eu. Eam cetero fabulas ad, solum clita an vim.
      
      Pri in dictas debitis platonem, mei an quas tollit voluptua. No verear eripuit labores vim, clita perfecto eu sed. Cu sea atqui deleniti scribentur, ea falli appetere scripserit sed. In errem quidam nec.      
      `});

    for (let i = 1; i < 10; i++) {
      this.licenses.push({ packageName: `Other Things ${i}`, text: this.licenses[0].text });
    }
  }

}
