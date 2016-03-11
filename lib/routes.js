import {FlowRouter} from 'meteor/kadira:flow-router';
import {FlowLayout} from 'meteor/meteorhacks:flow-layout';
FlowRouter.route('/',{
  action() {
    FlowLayout.render('frontLayout',{main: 'frontBody'});
  }
});
