FlowRouter.route('/',{
  action: function(){
    FlowLayout.render('frontlayout',{main:'frontbody'});
  }
});
//--Sample layouts - do not change for now, please!
FlowRouter.route('/leftnav', {
  action: function(){
    FlowLayout.render('mainlayout',{sidebar:'leftnav',main:'mainbody'});
  }
});
FlowRouter.route('/fullpage', {
  action: function(){
    FlowLayout.render('mainlayout',{sidebar:'',main:'fullpage'});
  }
});
