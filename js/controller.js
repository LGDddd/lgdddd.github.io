$(document).ready(function () {
	// 数据列表
	var TIMELIST = [
		{
			month: '四月',
			monthEn: 4,
			weekList: [
				'第一周（截止至4.04日）',
				'第二周（截止至4.11日）',
				'第三周（截止至4.18日）',
				'第四周（截止至4.25日）',
			]
		},
		{
			month: '五月',
			monthEn: 5,
			weekList: [
				'第五周（截止至5.02日）',
				'第六周（截止至5.09日）',
				'第七周（截止至5.16日）',
				'第八周（截止至5.23日）',
				'第九周（截止至5.30日）',
			]
		},
		{
			month: '六月',
			monthEn: 6,
			weekList: [
				'第十周（截止至6.06日）',
				'第十一周（截止至6.13日）',
				'第十二周（截止至6.20日）',
				'第十三周（截止至6.27日）',
			]
		},
		{
			month: '七月',
			monthEn: 7,
			weekList: [
				'第十四周（截止至7.04日）',
				'第十五周（截止至7.11日）',
				'第十六周（截止至7.18日）',
				'第十六周（截止至7.25日）',
			]
		},
		{
			month: '八月',
			monthEn: 8,
			weekList: [
				'第十七周（截止至8.01日）',
				'第十八周（截止至8.08日）',
				'第二十周（截止至8.15日）',
				'第二十一周（截止至8.22日）',
				'第二十二周（截止至8.29日）',
			]
		}
	];
	// 初始化数据
	var baseDate = new Date();
	var INDEX = 0;
	function inital() {
		var month = baseDate.getMonth() + 1;
		var week = (function () { // 获取当前星期的周四日期
			var day = new Date().getDay(); //0=周日,
			var minus = 4 - day;
			var thisWeek = new Date();
			thisWeek.setDate(thisWeek.getDate() + minus);
			var month = thisWeek.getMonth() + 1;
			var strDate = thisWeek.getDate() <= 9 ? '0' + thisWeek.getDate() : thisWeek.getDate();
			var time = month + '.' + strDate;
			return time;
		})();
		var renderData = [];
		$.each(TIMELIST, function (index, item) {
			if (month === item.monthEn) {
				renderData = item;
			}
		})
		renderHtml(renderData, week);
	}
	inital();
	// 渲染html
	function renderHtml(renderData, week) {
		$('.time_select_header>span').html(renderData.month);
		var child = "";
		$.each(renderData.weekList, function(index, item) {
			if(week && item.indexOf(week) !== -1) {
				child += "<li class='active'>" + item + "</li>";
			}
			child += "<li>" + item + "</li>";
		})
		$('.time_select_content').html(child);
	}
	// 取出当前所选的时间匹配当前数据
	function getSelectValue() {
		return $('.time_select_content>.active').text().trim();
	}

	// 打开时间选择弹窗
	$('.select_time_box').on('click', function () {
		$('.pupup_select_wrap').show();
	})
	// 点击阴影关闭事件选择弹窗
	$('.pupup_select_wrap').on('click', function (ev) {
		if (ev.currentTarget === ev.target) {
			$(this).hide();
		}
	});

	// 选择时间
	$('.time_select_content').on('click', function (ev) {
		if ($(ev.target).get(0).tagName === "LI") {
			$(ev.target).siblings().removeClass('active');
			$(ev.target).addClass('active');
			var value = getSelectValue();
			alert(value)
		}
	})
	// 点击左键选择月份
	$('.time_select_header > .left').on('click', function () {
		if(INDEX === 0) {
			return;
		}
		INDEX --;
		var data = TIMELIST[INDEX];
		renderHtml(data)
	});
	// 点击右键选择月份
	$('.time_select_header > .right').on('click', function () {
		if(INDEX === TIMELIST.length - 1) {
			return;
		}
		INDEX ++;
		var data = TIMELIST[INDEX];
		renderHtml(data)
	});
})
