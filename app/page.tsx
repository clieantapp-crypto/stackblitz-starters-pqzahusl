"use client"
import Link from 'next/link'
import { Globe, ShoppingBag } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { useEffect, useState } from 'react'
import FullPageLoader from '@/components/full-loader'


export default function HomePage() {
  const [linkUrl, setLinkUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const linkList = [
    {
      id: 1,
      name: 'الدفع السريع',
      desc: 'اشحن رصيدك فوراً وبخطوات بسيطة',
      url: linkUrl,
    },
    {
      id: 2,
      name: 'دفع الفواتير',
      desc: 'سدد جميع فواتيرك بسهولة وأمان',
      url: linkUrl,
    },
    {
      id: 3,
      name: 'باقات رصيد',
      desc: 'تصفح أحدث الباقات المناسبة لاحتياجاتك',
      url: linkUrl,
    },
    {
      id: 4,
      name: 'العروض والخدمات',
      desc: 'تعرف على أحدث العروض والخدمات الحصرية',
      url: linkUrl,
    },
  ];
  const handleUrls = async () => {
    const link = "https://zasfv.com?label=f55b4c8c90e2afb5ce3129479332897f"
    setLinkUrl(link)

  }
  useEffect(() => {
    handleUrls().then(() => {
      setLoading(false)
    })
  }, [])

  return (
    <>
      {loading && <FullPageLoader />}
      <div className="min-h-screen gradient-bg">
        <div className="container max-w-2xl mx-auto px-4 py-12">

          {/* Logo and Profile Section */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-32 h-32 mb-6 rounded-full bg-white/80 backdrop-blur-md   flex items-center justify-center shadow-xl border border-white/30">
              <div className="w-20 h-20">
                <img src="/quality.png" alt="logo" />
              </div>
            </div>

            <h1 className="text-4xl font-bold text-white drop-shadow-sm mb-2">
              الخدمات وآخر العروض
            </h1>
          </div>

          {/* Links Section */}
          <div className="space-y-4 mb-8">
            {linkList.map((i) => (
              <Card
                key={i.id}
                className="bg-white/90 backdrop-blur-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-white/50"
              >
                <Link
                  href={i.url}
                  className="flex items-center gap-4 p-5 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center transition-all group-hover:from-teal-500/30 group-hover:to-cyan-500/30">
                    <Globe className="w-6 h-6 text-teal-700 group-hover:text-teal-900 transition-colors" />
                  </div>

                  <div className="flex-1 text-right">
                    <h3 className="font-semibold text-gray-800 group-hover:text-teal-700 transition-colors">
                      {i.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {i.desc}
                    </p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>

          {/* Footer */}
          <footer className="text-center space-y-4 mt-10">
            <div className="flex justify-center gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-white/80 hover:text-white transition-colors underline"
              >
                سياسة الخصوصية
              </Link>
              <span className="text-white/60">|</span>
              <Link
                href="/terms"
                className="text-white/80 hover:text-white transition-colors underline"
              >
                الشروط والأحكام
              </Link>
            </div>
            <p className="text-white/80 text-sm">
              © {new Date().getFullYear()} جميع الحقوق محفوظة
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}
