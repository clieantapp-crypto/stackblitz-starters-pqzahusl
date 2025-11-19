import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const metadata = {
  title: 'سياسة الخصوصية | Privacy Policy',
  description: 'سياسة الخصوصية وحماية البيانات',
}

export default function PrivacyPage() {
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
            <h1 className="text-4xl font-bold mb-4 text-balance">سياسة الخصوصية</h1>
            <p className="text-muted-foreground text-lg">
              آخر تحديث: {new Date().toLocaleDateString('ar-SA')}
            </p>
          </div>
        </div>

        <Card className="p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">١. مقدمة</h2>
            <p className="text-right leading-relaxed text-muted-foreground">
              نحن نلتزم بحماية خصوصيتك. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام موقعنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٢. المعلومات التي نجمعها</h2>
            <div className="space-y-4 text-right">
              <div>
                <h3 className="text-lg font-semibold mb-2">المعلومات الشخصية</h3>
                <p className="leading-relaxed text-muted-foreground">
                  قد نجمع معلومات شخصية مثل الاسم والبريد الإلكتروني عندما تتواصل معنا أو تستخدم خدماتنا.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">معلومات الاستخدام</h3>
                <p className="leading-relaxed text-muted-foreground">
                  نجمع معلومات حول كيفية تفاعلك مع موقعنا، مثل الصفحات التي تزورها والروابط التي تنقر عليها.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٣. استخدام المعلومات</h2>
            <p className="text-right leading-relaxed text-muted-foreground mb-4">
              نستخدم المعلومات التي نجمعها للأغراض التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 text-right text-muted-foreground">
              <li>تحسين تجربة المستخدم</li>
              <li>تقديم محتوى مخصص</li>
              <li>تحليل استخدام الموقع</li>
              <li>التواصل معك عند الحاجة</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٤. ملفات تعريف الارتباط (Cookies)</h2>
            <p className="text-right leading-relaxed text-muted-foreground">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٥. الإعلانات (Google AdSense)</h2>
            <div className="space-y-4 text-right leading-relaxed text-muted-foreground">
              <p>
                نستخدم Google AdSense لعرض الإعلانات على موقعنا. تستخدم Google ملفات تعريف الارتباط لعرض إعلانات بناءً على زياراتك السابقة.
              </p>
              <p>
                يمكنك إلغاء الاشتراك في استخدام ملفات تعريف الارتباط للإعلانات المخصصة من خلال زيارة{' '}
                <a 
                  href="https://www.google.com/settings/ads" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  إعدادات الإعلانات من Google
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٦. حماية البيانات</h2>
            <p className="text-right leading-relaxed text-muted-foreground">
              نتخذ تدابير أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الاستخدام أو الكشف.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٧. مشاركة المعلومات</h2>
            <p className="text-right leading-relaxed text-muted-foreground">
              لا نبيع أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا عندما يكون ذلك ضرورياً لتقديم خدماتنا أو عندما يقتضي القانون ذلك.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٨. حقوقك</h2>
            <p className="text-right leading-relaxed text-muted-foreground mb-4">
              لديك الحق في:
            </p>
            <ul className="list-disc list-inside space-y-2 text-right text-muted-foreground">
              <li>الوصول إلى معلوماتك الشخصية</li>
              <li>تصحيح المعلومات غير الدقيقة</li>
              <li>طلب حذف معلوماتك</li>
              <li>الاعتراض على معالجة معلوماتك</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">٩. التغييرات على هذه السياسة</h2>
            <p className="text-right leading-relaxed text-muted-foreground">
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سننشر أي تغييرات على هذه الصفحة مع تاريخ التحديث.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-right">١٠. اتصل بنا</h2>
            <p className="text-right leading-relaxed text-muted-foreground">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر البريد الإلكتروني أو من خلال نموذج الاتصال في موقعنا.
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
