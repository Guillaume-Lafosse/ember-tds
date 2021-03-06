import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params){
    return RSVP.hash({
      fields:['etat'],
      steps:this.get('store').findAll('step'),
      operations:[{icon:'remove red',link:'projects.delete'},{icon:'edit',link:'projects.edit'}]
    });
  }
});
