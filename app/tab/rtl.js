"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {width: "100%", enableRTL: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "#JS"}, "سكريبت")), 
            React.createElement("li", null, React.createElement("a", {href: "#cSharp"}, "C شارب (C #)")), 
            React.createElement("li", null, React.createElement("a", {href: "#vb"}, "البصرية الأساسية"))
        ), 
            React.createElement("div", {id: "JS"}, 
                "جافا سكريبت (JS) هو تفسير الكمبيوتر لغة البرمجة." + ' ' +
                "تم تنفيذ أصلا كجزء من متصفحات الويب بحيث البرامج النصية من جانب العميل يمكن أن تتفاعل مع المستخدم، والسيطرة على المتصفح،" + ' ' +
                "التواصل بشكل غير متزامن، وتغيير محتوى الوثيقة التي تم عرضها. [5] وفي الآونة الأخيرة، ومع ذلك،" + ' ' +
                "أصبح من الشائع في كل من تطوير اللعبة وإنشاء تطبيقات سطح المكتب."
            ), 
            React.createElement("div", {id: "cSharp"}, 
                "يقصد به أن تكون بسيطة وعصرية، لأغراض عامة، لغة البرمجة وجوه المنحى C #." + ' ' +
                "ويقود فريق تطويره بواسطة Anders Hejlsberg. أحدث إصدار هو C # 5.0، والذي صدر في 15 أغسطس 2012."
            ), 
            React.createElement("div", {id: "vb"}, 
                "يتم تثبيت مترجم سطر الأوامر، VBC.EXE، كجزء من مجانية. NET الإطار SDK." + ' ' +
                "ويشمل أيضا أحادية مترجم VB.NET سطر الأوامر. أحدث إصدار هو VB 2012، والذي صدر في 15 أغسطس 2012."
            )
    ),
document.getElementById('tab-rtl')
);