# دليل تنصيب VerifyBusiness على Namecheap Shared Hosting

هذا الدليل مخصص لرفع وتشغيل مشروع `VerifyBusiness` على استضافة `Namecheap Shared Hosting` بشرط أن تكون الخطة تدعم:

- `Node.js App`
- `cPanel`
- `npm install`

إذا كانت الخطة لا تدعم `Node.js` فلن يعمل المشروع عليها بهذه الطريقة.

## 1. تجهيز المشروع محلياً

من داخل مجلد المشروع شغّل:

```bash
npm install
npm run lint
npm run build
```

تم التحقق أن:
- `npm run lint` ناجح
- `npm run build` ناجح

## 2. الملفات المطلوبة للرفع

ارفع هذه الملفات والمجلدات:

- `server.js`
- `package.json`
- `package-lock.json`
- `.next/standalone`
- `.next/static`
- `public`
- `messages`

إذا كنت تستخدم متغيرات بيئة:
- أضف `.env.production`

## 3. مكان رفع الملفات

داخل الاستضافة أنشئ مجلدًا مثلاً:

```text
verify-business
```

أو داخل:

```text
/home/username/verify-business
```

ثم ارفع الملفات إليه.

## 4. إنشاء التطبيق من cPanel

من لوحة `cPanel`:

1. افتح `Setup Node.js App`
2. اضغط `Create Application`

استخدم القيم التالية:

- `Node.js version`: اختر `20.x` إن وجدت، أو `18.x`
- `Application mode`: `Production`
- `Application root`: `verify-business`
- `Application URL`: اختر الدومين أو الساب دومين
- `Application startup file`: `server.js`

ثم اضغط `Create`.

## 5. تثبيت الحزم

بعد إنشاء التطبيق:

1. اضغط `Run NPM Install`
2. أو من الـ Terminal:

```bash
cd ~/verify-business
npm install
```

## 6. إعداد متغيرات البيئة

من داخل صفحة التطبيق في `Setup Node.js App` أضف المتغيرات المطلوبة.

مثال أساسي:

```env
NODE_ENV=production
PORT=3000
```

إذا كان لديك مفاتيح API أو إعدادات إضافية، أضفها هنا أيضاً.

## 7. تشغيل التطبيق

بعد تثبيت الحزم:

1. اضغط `Restart`
2. أو `Start App`

بعدها يجب أن يعمل الموقع عبر الدومين المرتبط.

## 8. إذا ظهر خطأ 500

راجع التالي:

1. هل الخطة تدعم `Node.js` فعلاً
2. هل ملف التشغيل هو `server.js`
3. هل `npm install` اكتمل
4. هل `.next/standalone` مرفوع
5. هل `.next/static` مرفوع
6. هل `public` و`messages` مرفوعان
7. هل أعدت تشغيل التطبيق بعد الرفع

## 9. ملاحظة مهمة

قد تظهر في بعض البيئات تحذيرات مرتبطة بالـ `lockfiles` أو مسار الجذر، لكن هذا لا يمنع تشغيل المشروع إذا كان التطبيق أُنشئ بشكل صحيح داخل `cPanel`.

## 10. توصية عملية لاسم المسار

يفضل استخدام:

```text
Application root: verify-business
Startup file: server.js
```

ولا تضع المشروع مباشرة داخل `public_html` إلا إذا كنت تعرف بالضبط كيف ترتب المسارات داخل الاستضافة.
