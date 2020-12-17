"use strict";

ReactDOM.render(
    React.createElement(EJ.Menu, {enableRTL: true}, 
        React.createElement("li", null, 
            React.createElement("a", null, "كتب"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "الإصدارات الجديدة")), 
                            React.createElement("li", null, React.createElement("a", null, "جديد إصدارات الكتب السمعية")), 
                            React.createElement("li", null, React.createElement("a", null, "أكثر الكتب مبيعا")), 
                            React.createElement("li", null, React.createElement("a", null, "قادمة")), 
                            React.createElement("li", null, React.createElement("a", null, "مجموعات مربع"))
                        )
        ), 
                    React.createElement("li", null, 
                        React.createElement("a", null, "الألعاب"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "قادمة")), 
                            React.createElement("li", null, React.createElement("a", null, "PC")), 
                            React.createElement("li", null, React.createElement("a", null, "PS فيتا")), 
                            React.createElement("li", {className: "separator"}), 
                            React.createElement("li", null, React.createElement("a", null, "PS3")), 
                            React.createElement("li", null, React.createElement("a", null, "اكس بوكس")), 
                            React.createElement("li", null, React.createElement("a", null, "لوحات المفاتيح"))
                        )
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", null, "متنقل"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "القادمون الجدد")), 
                            React.createElement("li", null, React.createElement("a", null, "أكثر الكتب مبيعا")), 
                            React.createElement("li", null, React.createElement("a", null, "منخفض السعر")), 
                            React.createElement("li", null, React.createElement("a", null, "أقراص"))
                        )
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", null, "الكاميرات"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "حدد و صور")), 
                            React.createElement("li", null, React.createElement("a", null, "SLR الرقمية")), 
                            React.createElement("li", null, React.createElement("a", null, "كاميرات الفيديو الرقمية")), 
                            React.createElement("li", null, React.createElement("a", null, "أكثر الكتب مبيعا"))
                        )
                    ), 

                    React.createElement("li", null, 
                        React.createElement("a", null, "موسيقى"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "الإصدارات الجديدة")), 
                            React.createElement("li", null, React.createElement("a", null, "أكثر الكتب مبيعا")), 
                            React.createElement("li", null, React.createElement("a", null, "موسيقى الروك")), 
                            React.createElement("li", null, React.createElement("a", null, "التعبدية والروحية")), 
                            React.createElement("li", null, React.createElement("a", null, "الصوفية وغزال"))
                        )
                    )
    ),
document.getElementById('menu-rtl')
);