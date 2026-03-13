# دليل تنصيب VerifyBusiness على الاستضافة المشتركة

هذا الملف يشرح طريقة رفع وتشغيل مشروع `VerifyBusiness` على استضافة مشتركة تدعم تطبيقات `Node.js` من خلال `cPanel` أو لوحة مشابهة.

هذا الدليل مناسب خصوصاً إذا كانت الاستضافة توفر:
- `Setup Node.js App`
- الوصول إلى `File Manager`
- إمكانية تشغيل `npm install`
- اختيار إصدار `Node.js`

إذا كانت الاستضافة المشتركة لا تدعم `Node.js` من الأساس، فلن يعمل مشروع `Next.js` بهذا الشكل عليها، وستحتاج إلى VPS أو خدمة نشر مخصصة.

## 1. المتطلبات

قبل الرفع، تأكد من الآتي:
- لديك وصول إلى لوحة الاستضافة
- الاستضافة تدعم `Node.js 20` أو `Node.js 18`
- اسم الدومين أو الساب دومين جاهز
- المشروع يعمل محلياً بدون مشاكل

## 2. تجهيز المشروع محلياً

من داخل مجلد المشروع شغّل:

```bash
npm install
npm run lint
npm run build
```

هذا المشروع مهيأ ليعمل بإخراج:

```ts
output: 'standalone'
```

لذلك بعد البناء ستعتمد أساساً على:
- `.next/standalone`
- `.next/static`
- `public`

## 3. الملفات التي يجب رفعها

في أغلب حالات الاستضافة المشتركة ارفع هذه العناصر فقط:
- `server.js`
- `package.json`
- `package-lock.json`
- `.next/standalone`
- `.next/static`
- `public`
- `messages`

إذا كنت تستخدم متغيرات بيئة، جهز أيضاً:
- `.env.production`

أو أضف القيم من لوحة الاستضافة داخل إعدادات التطبيق.

## 4. أفضل هيكل للرفع

أنشئ مجلداً للتطبيق داخل الاستضافة، مثلاً:

```text
/home/username/verify-business
```

ثم ارفع الملفات داخله.

يفضل أن يصبح الشكل النهائي تقريباً هكذا:

```text
verify-business/
  .next/
    standalone/
    static/
  public/
  messages/
  server.js
  package.json
  package-lock.json
```

## 5. إنشاء تطبيق Node.js من cPanel

من لوحة التحكم:

1. افتح `Setup Node.js App`
2. اضغط `Create Application`
3. أدخل الإعدادات التالية:

- `Node.js version`: اختر `20.x` إن كانت متاحة
- `Application mode`: اختر `Production`
- `Application root`: اسم مجلد المشروع مثل `verify-business`
- `Application URL`: اختر الدومين أو الساب دومين
- `Application startup file`: اكتب `server.js`

ثم اضغط `Create`.

## 6. تثبيت الحزم

بعد إنشاء التطبيق:

1. اضغط `Run NPM Install`
2. انتظر حتى ينتهي التثبيت

إذا كانت اللوحة لا توفر زر التثبيت لكن توفر Terminal، نفذ:

```bash
cd ~/verify-business
npm install
```

## 7. متغيرات البيئة

إذا كان المشروع يحتاج متغيرات بيئة، أضفها من لوحة `Node.js App` أو داخل ملف:

```bash
.env.production
```

مثال:

```env
NODE_ENV=production
PORT=3000
```

إذا أضفت أي مفاتيح API أو إعدادات إضافية، أعد تشغيل التطبيق بعد الحفظ.

## 8. تشغيل التطبيق

بعد التثبيت:

1. اضغط `Restart`
2. أو `Start App` إذا لم يكن يعمل

إذا كان كل شيء صحيحاً، سيفتح الموقع من خلال الدومين المرتبط بالتطبيق.

## 9. ملاحظات مهمة لهذا المشروع

- المشروع يستخدم `Next.js`
- الترجمة موجودة داخل مجلد `messages`
- ملف التشغيل الأساسي هو `server.js`
- تم التحقق من نجاح:
  - `npm run lint`
  - `npm run build`

## 10. إذا ظهر الموقع 500 أو لم يفتح

افحص هذه النقاط بالترتيب:

1. تأكد أن الاستضافة تدعم `Node.js`
2. تأكد أن `Application startup file` هو `server.js`
3. تأكد أن `npm install` تم بنجاح
4. تأكد أن مجلدات `.next/standalone` و`.next/static` و`public` مرفوعة
5. تأكد أن `messages` مرفوع أيضاً
6. تأكد أن إصدار `Node.js` مناسب
7. أعد تشغيل التطبيق من اللوحة

## 11. إذا كانت الاستضافة لا تسمح بتشغيل Next.js بشكل جيد

بعض الاستضافات المشتركة تدعم `Node.js` شكلياً لكن تكون محدودة جداً. في هذه الحالة الأفضل:
- VPS
- CloudPanel
- Plesk VPS
- Vercel
- Railway
- Render

## 12. توصية عملية

إذا كانت الاستضافة المشتركة من نوع `cPanel Shared Hosting` وتدعم `Setup Node.js App` فعادةً يمكن تشغيل المشروع بنجاح.

أما إذا كانت استضافة PHP فقط بدون Node.js، فلا أنصح بمحاولة تشغيل المشروع عليها.
