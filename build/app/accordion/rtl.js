"use strict";

ReactDOM.render(
    React.createElement(EJ.Accordion, {enableRTL: true}, 
        React.createElement("h3", null, 
             React.createElement("a", {href: "#"}, "سكريبت")
        ), 
        React.createElement("div", null, 
            "جافا سكريبت (JS) هو تفسير الكمبيوتر لغة البرمجة." + ' ' +
            "تم تنفيذ أصلا كجزء من متصفحات الويب بحيث البرامج النصية من جانب العميل يمكن أن تتفاعل مع المستخدم، والسيطرة على المتصفح،" + ' ' +
            "التواصل بشكل غير متزامن، وتغيير محتوى الوثيقة التي تم عرضها. [5] وفي الآونة الأخيرة، ومع ذلك،" + ' ' +
            "أصبح من الشائع في كل من تطوير اللعبة وإنشاء تطبيقات سطح المكتب."
        ), 
        React.createElement("h3", null, 
            React.createElement("a", {href: "#"}, "C شارب (C #)")
        ), 
        React.createElement("div", null, 
            "يقصد به أن تكون بسيطة وعصرية، لأغراض عامة، لغة البرمجة وجوه المنحى C #." + ' ' +
            "ويقود فريق تطويره بواسطة Anders Hejlsberg. أحدث إصدار هو C # 5.0، والذي صدر في 15 أغسطس 2012."
        ), 
        React.createElement("h3", null, 
            React.createElement("a", {href: "#"}, "البصرية الأساسية")
        ), 
        React.createElement("div", null, 
            "يتم تثبيت مترجم سطر الأوامر، VBC.EXE، كجزء من مجانية. NET الإطار SDK." + ' ' +
            "ويشمل أيضا أحادية مترجم VB.NET سطر الأوامر. أحدث إصدار هو VB 2012، والذي صدر في 15 أغسطس 2012."
        )
    ),
        document.getElementById('accordion-rtl')
);