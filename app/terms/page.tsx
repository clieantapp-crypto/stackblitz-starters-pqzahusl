import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const metadata = {
  title: 'الشروط والأحكام | Terms of Service',
  description: 'شروط استخدام الموقع والخدمات',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-6">
              <ArrowRight className="w-4 h-4" />
              العودة للصفحة الرئيسية
            </Button>
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-balance">الشروط والأحكام</h1>
            <p className="text-muted-foreground text-lg">
              آخر تحديث: {new Date().toLocaleDateString('ar-SA')}
            </p>
          </div>
        </div>

        <Card className="p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">١. قبول الشروط</h2>
            <p className="text-right leading-relaxed text-muted-foreground">
              باستخدامك لهذا الموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٢. استخدام الموقع</h2>
            <div className="space-y-4 text-right">
              <p className="leading-relaxed text-muted-foreground">
                يُسمح لك باستخدام هذا الموقع للأغراض الشخصية والقانونية فقط. يُحظر عليك:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>استخدام الموقع بطريقة غير قانونية</li>
                <li>محاولة الوصول غير المصرح به إلى أنظمتنا</li>
                <li>نشر محتوى مسيء أو ضار</li>
                <li>انتهاك حقوق الآخرين</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٣. الملكية الفكرية</h2>
            <p className="text-right leading-relaxed text-muted-foreground">
              جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والصور والرسومات والشعارات، محمية بحقوق الطبع والنشر وحقوق الملكية الفكرية الأخرى.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٤. المحتوى الإعلاني</h2>
            <div className="space-y-4 text-right leading-relaxed text-muted-foreground">
              <p>
                يحتوي هذا الموقع على إعلانات تُعرض من خلال Google AdSense وشركاء إعلانيين آخرين.
              </p>
              <p>
                نحن لا نتحمل المسؤولية عن محتوى الإعلانات المعروضة أو المواقع التي ترتبط بها هذه الإعلانات.
              </p>
              <p>
                يُحظر تماماً:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>النقر الاحتيالي على الإعلانات</li>
                <li>استخدام برامج آلية للنقر على الإعلانات</li>
                <li>تشجيع الآخرين على النقر على الإعلانات</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٥. إخلاء المسؤولية</h2>
            <p className="text-right leading-relaxed text-muted-foreground">
              يتم توفير هذا الموقع "كما هو" دون أي ضمانات من أي نوع. لا نضمن أن الموقع سيكون خالياً من الأخطاء أو متاحاً بشكل مستمر.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٦. حدود المسؤولية</h2>
            <p className="text-right leading-relaxed text-muted-foreground">
              لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية ناتجة عن استخدامك لهذا الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٧. الروابط الخارجية</h2>
            <p className="text-right leading-relaxed text-muted-foreground">
              قد يحتوي موقعنا على روابط لمواقع خارجية. نحن لسنا مسؤولين عن محتوى أو سياسات الخصوصية لهذه المواقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٨. سياسة المحتوى المحظور</h2>
            <div className="space-y-4 text-right leading-relaxed text-muted-foreground">
              <p>
                وفقاً لسياسات Google AdSense، يُحظر المحتوى التالي:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>المحتوى الجنسي أو للبالغين</li>
                <li>المحتوى العنيف أو المسيء</li>
                <li>المحتوى المضلل أو الاحتيالي</li>
                <li>المحتوى الذي يحرض على الكراهية</li>
                <li>المحتوى المخالف للقوانين</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٩. التعديلات</h2>
            <p className="text-right leading-relaxed text-muted-foreground">
              نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة، ويُعتبر استمرارك في استخدام الموقع بمثابة موافقة على الشروط المعدلة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">١٠. القانون الحاكم</h2>
            <p className="text-right leading-relaxed text-muted-foreground">
              تخضع هذه الشروط والأحكام لقوانين الدولة المعمول بها، ويتم حل أي نزاعات وفقاً لذلك.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">١١. اتصل بنا</h2>
            <p className="text-right leading-relaxed text-muted-foreground">
              إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى التواصل معنا عبر البريد الإلكتروني أو من خلال نموذج الاتصال في موقعنا.
            </p>
          </section>
        </Card>

        <div className="text-center mt-8">
          <Link href="/">
            <Button size="lg" className="gap-2">
              <ArrowRight className="w-4 h-4" />
              العودة للصفحة الرئيسية
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
