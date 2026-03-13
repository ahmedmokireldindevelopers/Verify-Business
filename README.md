# VerifyBusiness

VerifyBusiness is a multilingual company verification and business discovery platform built with Next.js, Supabase, and structured directory search across Crunchbase, LinkedIn exports, and global company sources.

مشروع `VerifyBusiness` مبني باستخدام `Next.js` ويدعم تعدد اللغات.

## التشغيل المحلي

```bash
npm install
npm run dev
```

افتح:

```text
http://localhost:3000
```

إذا كان المنفذ مستخدماً:

```bash
npm run dev -- --port 3001
```

## مشروع Vite داخل نفس المستودع

تم إنشاء مساحة ترحيل مستقلة داخل:

```text
vite-app/
```

لتشغيلها:

```bash
cd vite-app
npm install
npm run dev
```

ثم افتح:

```text
http://localhost:5173
```

المشروع الحالي `Next.js` ما زال مستقلاً، ومشروع `Vite` مخصص لبدء التحويل التدريجي بدون كسر النسخة الحالية.

## التحقق قبل النشر

```bash
npm run lint
npm run build
```

## ملفات النشر

- دليل عام للاستضافة المشتركة:
  [deploy_shared_hosting.md](c:/Users/Ahmed%20EL%20Sayed/Desktop/VerifyBusiness/deploy_shared_hosting.md)

- دليل Namecheap Shared Hosting:
  [deploy_namecheap.md](c:/Users/Ahmed%20EL%20Sayed/Desktop/VerifyBusiness/deploy_namecheap.md)

- GitHub auto-sync for cPanel/Namecheap:
  [deploy_github_sync.md](c:/Users/Ahmed%20EL%20Sayed/Desktop/VerifyBusiness/deploy_github_sync.md)
