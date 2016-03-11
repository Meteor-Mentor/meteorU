import FlowRouter from 'flow-router';
import FlowLayout from 'flow-layout';
FlowRouter.route('/',{
  action() {
    FlowLayout.render('frontLayout',{main: 'frontBody'});
  }
});
