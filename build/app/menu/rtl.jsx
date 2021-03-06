"use strict";

ReactDOM.render(
    <EJ.Menu enableRTL={true}>
        <li>
            <a>كتب</a>
                        <ul>
                            <li><a>الإصدارات الجديدة</a></li>
                            <li><a>جديد إصدارات الكتب السمعية</a></li>
                            <li><a>أكثر الكتب مبيعا</a></li>
                            <li><a>قادمة</a></li>
                            <li><a>مجموعات مربع</a></li>
                        </ul>
        </li>
                    <li>
                        <a>الألعاب</a>
                        <ul>
                            <li><a>قادمة</a></li>
                            <li><a>PC</a></li>
                            <li><a>PS فيتا</a></li>
                            <li className="separator"></li>
                            <li><a>PS3</a></li>
                            <li><a>اكس بوكس</a></li>
                            <li><a>لوحات المفاتيح</a></li>
                        </ul>
                    </li>
                    <li>
                        <a>متنقل</a>
                        <ul>
                            <li><a>القادمون الجدد</a></li>
                            <li><a>أكثر الكتب مبيعا</a></li>
                            <li><a>منخفض السعر</a></li>
                            <li><a>أقراص</a></li>
                        </ul>
                    </li>
                    <li>
                        <a>الكاميرات</a>
                        <ul>
                            <li><a>حدد و صور</a></li>
                            <li><a>SLR الرقمية</a></li>
                            <li><a>كاميرات الفيديو الرقمية</a></li>
                            <li><a>أكثر الكتب مبيعا</a></li>
                        </ul>
                    </li>

                    <li>
                        <a>موسيقى</a>
                        <ul>
                            <li><a>الإصدارات الجديدة</a></li>
                            <li><a>أكثر الكتب مبيعا</a></li>
                            <li><a>موسيقى الروك</a></li>
                            <li><a>التعبدية والروحية</a></li>
                            <li><a>الصوفية وغزال</a></li>
                        </ul>
                    </li>
    </EJ.Menu>,
document.getElementById('menu-rtl')
);