import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      developers:this.get('store').findAll('developer',{include:"projects"}),
      fields:['identity'],
      operations:[{icon:'red remove',link:'developers.delete'},{icon:'edit',link:'developers.edit'}]
    });
  }
});
