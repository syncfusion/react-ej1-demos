var RTLDialog = React.createClass({
    componentDidMount: function () {
        $("#rtlbtnOpen").hide();
		$(window).resize(function(){
			var obj=$('#rtlDialog').ejDialog('instance');
			obj.refresh();
		});
    },
    open: function (e) {
        $("#rtlbtnOpen").hide();
        $("#rtlDialog").ejDialog("open");
    },
    dialogClose: function (e) {
        $("#rtlbtnOpen").show();
    },
    render: function () {
        return (   
            <div id="rtlDialogContent">
                <EJ.Button className="e-btn" id="rtlbtnOpen" size="medium" click={this.open} height={30} width={150}>
                    Click to open dialog
                </EJ.Button>
                <EJ.Dialog id="rtlDialog" title="أودي Q3 محرك" containment="#rtlDialogContent" isResponsive={true} enableRTL={true} width={250} height={300} target="#rtlDialogContent" close={this.dialogClose} tooltip={dialog_tooltip}>
                    <h1>الاستماع Q3</h1>
                    <div class="cnt">
                        بل هو مفهوم السيارة مع السائل فضة لون الجسم، وعجلات 20 بوصة، سقف قابلة للطي النسيج، وغطاء محرك السيارة التي تسيطر عليها كهربائيا،
                        4 أسطوانات محرك 2.0 TDI تصنيف 204 حصانا (150 كيلوواط؛ 201 حصان) و 400 نيوتن متر (295.02 باوند · قدم)، الديزل جسيمات
                        مرشح وبلوتك نظام التحكم في الانبعاثات، كواترو دائم نظام الدفع الرباعي مع HALDEX القابض، أودي S ترونيك علبة التروس ذات
                        القابض المزدوج، ماكفرسون-تبختر المحور الأمامي والمحور الخلفي أربعة الارتباط، أودي محرك أقراص النظام SELECT مع 3 طرق
                        (الديناميكية، والرياضة، والكفاءة)، MMI لوحة التحكم مع لوحة اللمس والرؤية المزدوجة والتكنولوجيا، ونظام الصوت مع مكبرات
                        الصوت تمديد بارز.
                    </div>
                </EJ.Dialog>
            </div>
        );
    }
});  

ReactDOM.render(<RTLDialog />, document.getElementById('dialog-rtl'));