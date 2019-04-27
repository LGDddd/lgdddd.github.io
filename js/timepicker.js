$.extend({
	timepicker: function(opts) {
		var el = $(opts.el);
		var flag = opts.flag || false;
		var maxdate = opts.maxdate;
		var mindate = opts.mindate;
		var classname = "picker" + new Date().getTime();
		var datelist = $._handleTime(mindate, maxdate);
		var timepopupconent = $._timeTemplate(classname, datelist);
		$('body').append(timepopupconent);
		var timepopupclass = $("." + classname);

		// 是否默认显示
		if (flag) {
			timepopupclass.show();
			flag = false;
		}
		// 阻止滚动
		timepopupclass.on('touchmove', function(e) {
			e.preventDefault();
		});
		// 点击显示
		el.on('click', function() {
			timepopupclass.show();
			flag = false;
		})
		// 点击阴影隐藏
		timepopupclass.on('click', function(e) {
			if (!flag && e.currentTarget === e.target) {
				timepopupclass.hide();
				flag = true;
			}
		});
		// 选择时间的点击事件
		
	},
	_timeTemplate: function(classname) {
		var header = "<div><img  src='/img/left_arrow.png'><span>4月</span><img src='/img/right_arrow.png'></div>";
		var str = "<div class='pupup_select_wrap " + classname + "'><div class='popup_time'></div></div>";
		return str;
	},
	_handleTime: function(min, max) {
		var data = [];
		return data;
	}
})
