// 分页构造函数
function PageCtrFn(program){
    //分页按钮的容器
    this.box = $('#'+program.ele);
    // 总页数
    this.maxPage = 20;
    // 当前页码
    this.currentPage = 1;
    //修改页码的函数
    this.ControllPageFn(this.currentPage);
    // 给创建的分页按钮
    this.getDateFn(this.currentPage)
}
//修改页码
PageCtrFn.prototype.ControllPageFn = function(num){
    // 限定当前页码的范围:1~30
        if (num<=this.maxPage&&num>=1) {
            this.currentPage = num;
        }else{
            //当前页码大于最大页码时停止后面
            return;
        }
        // 准备创建分页按钮
        this.box.empty();
        // 如果总页数少于7个就不需要省略号
        if (this.maxPage<=7) {
            //当页码不是1时创建上一页
            this.currentPage != 1&&$("<a></a>").addClass("kuanBtn previousBtn").html("上一页").appendTo(this.box);
            //创建出所有页数
            for (var i = 0; i < this.maxPage; i++) {
                $("<a></a>").addClass("numBtn").html(i+1).appendTo(this.box);
            }
            //当前页码不是最大页码时创建下一页
            this.currentPage != this.maxPage&&$("<a></a>").addClass("kuanBtn nextBtn").html("下一页").appendTo(this.box);
            //找#controllBox中含有有class样式为numBtn的当前页码上一个元素添加class样式为selected;
            this.box.find(".numBtn").eq(this.currentPage-1).addClass("selected");
        }else if(this.currentPage<5){
            this.currentPage != 1&&$("<a></a>").addClass("kuanBtn previousBtn").html("上一页").appendTo(this.box);
            for (var i = 1; i < 7; i++) {
                $("<a></a>").addClass("numBtn").html(i).appendTo(this.box);
            }
            $("<a></a>").addClass("ellipsis").html('...').appendTo(this.box);
            $("<a></a>").addClass("numBtn").html(this.maxPage).appendTo(this.box);
            this.currentPage != this.maxPage&&$("<a></a>").addClass("kuanBtn nextBtn").html("下一页").appendTo(this.box);
            //找#controllBox中含有有class样式为numBtn的当前页码的下标值添加class样式为selected;
            this.box.find(".numBtn").eq(this.currentPage-1).addClass("selected");
        //判断当前页数在中间部分时的情况
        }else if(this.currentPage<this.maxPage-3){
            $("<a></a>").addClass("kuanBtn previousBtn").html("上一页").appendTo(this.box);
            $("<a></a>").addClass("numBtn").html("1").appendTo(this.box);
            $("<a></a>").addClass("ellipsis").html("...").appendTo(this.box);
            //1.遍历得到中间显示的五个按钮
            for (var i = this.currentPage-3; i < this.currentPage+2; i++) {
                // 判断是中间按钮是当前页码的按钮时给他加样式
                if (i==this.currentPage-1) {
                    $("<a></a>").addClass("numBtn selected").html(i+1).appendTo(this.box);
                }else{
                    //其它四个不加样式添加到页面上
                    $("<a></a>").addClass("numBtn").html(i+1).appendTo(this.box);
                }
            }
            $("<a></a>").addClass("ellipsis").html("...").appendTo(this.box);
            $("<a></a>").addClass("numBtn").html(this.maxPage).appendTo(this.box);
            $("<a></a>").addClass("kuanBtn nextBtn").html("下一页").appendTo(this.box);
        //判断当前页面在最后5个按钮的时的情况
        }else{
            $("<a></a>").addClass("kuanBtn previousBtn").html("上一页").appendTo(this.box);
            $("<a></a>").addClass("numBtn").html("1").appendTo(this.box);
            $("<a></a>").addClass("ellipsis").html("...").appendTo(this.box);
            //1.遍历得到中间显示的五个按钮
            for (var i = this.maxPage-5; i < this.maxPage; i++) {
                if (i==this.currentPage-1) {
                    $("<a></a>").addClass("numBtn selected").html(i+1).appendTo(this.box);
                }else{
                    $("<a></a>").addClass("numBtn").html(i+1).appendTo(this.box);
                }
            }
            //2.创建到中间显示的五个按钮
            // $("<a></a>").addClass("numBtn").html(this.maxPage-4).appendTo(this.box);
            // $("<a></a>").addClass("numBtn").html(this.maxPage-3).appendTo(this.box);
            // $("<a></a>").addClass("numBtn").html(this.maxPage-2).appendTo(this.box);
            // $("<a></a>").addClass("numBtn").html(this.maxPage-1).appendTo(this.box);
            // $("<a></a>").addClass("numBtn").html(this.maxPage).appendTo(this.box);
            // this.box.find(".numBtn").eq(this.currentPage-this.maxPage-1).addClass("selected");
            //当当前页面不是最大页码时添加下一页
            this.currentPage != this.maxPage&&$("<a></a>").addClass("kuanBtn nextBtn").html("下一页").appendTo(this.box);
        }
        this.bindEvent();
}
//页面事件绑定
PageCtrFn.prototype.bindEvent = function(num){
        var self = this;
        $('.numBtn').click(function(){
            //获取当前页码并把它从字符串转换为整形值
            var num = parseInt($(this).html());
            self.ControllPageFn(num);
            self.getDateFn(num)
        })
        //上一页
        $(".previousBtn").click(function(){
            var num = self.currentPage-1;
            self.ControllPageFn(num);
            self.getDateFn(num)
        })
        //下一页
        $(".nextBtn").click(function(){
            var num = self.currentPage+1;
            self.ControllPageFn(num);
            self.getDateFn(num)
        })
}
//根据页请求数据函数
PageCtrFn.prototype.getDateFn = function(num){
    $.get("http://192.168.43.210/qqq/byteDance/php/xiaoyuanzhaopin.php?page="+num,function(data){
        console.log(data);
        var jsonstr = JSON.parse(data);
        var domStr = '<table cellpadding="0" cellspacing="0" class="data"><tr style="background:lightblue;"><td style="width:340px;padding-left: 35px">职位名称</td><td style="width:160px">职位类别</td><td style="width:160px">职位类型</td><td style="width:130px">工作地点</td><td style="width:130px">发布时间</td></tr>';
        for (var i = 0; i < jsonstr.data.length; i++) {
            domStr +="<tr><td style='padding-left:35px'>"+jsonstr.data[i].name+"</td><td>"+jsonstr.data[i].职位类别+"</td><td>"+jsonstr.data[i].职位类型+"</td><td>"+jsonstr.data[i].工作地点+"</td><td>"+jsonstr.data[i].发布时间+"</td></tr>"
;
        }
        domStr += "</table>";
        $("#photoBox").html(domStr);
    })
}
new PageCtrFn({
    "ele":"controllBox"
})
