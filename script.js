const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const languageSelect = document.querySelector('#language');
const pageName = location.pathname.endsWith('privacy.html') ? 'privacy' : location.pathname.endsWith('apps.html') ? 'apps' : 'support';
let currentLanguage = 'en';

const baseTranslations = {
  en: {},
  ru: {
    navSupport: "Поддержка", navPrivacy: "Конфиденциальность", navContact: "Написать", navApps: "Главная",
    overline: "ПОДДЕРЖКА ВСЕХ ПРИЛОЖЕНИЙ",
    title: "Чем я могу<br />помочь<span class=\"period\">?</span>",
    heroCopy: "Это страница поддержки приложений, созданных Павлом Киором. Напишите, каким приложением пользуетесь, и опишите проблему. Я постараюсь помочь.",
    roundLink: "НАПИСАТЬ<br />МНЕ", includeTitle: "Что указать в письме",
    includeText: "Укажите название приложения, модель устройства, версии iOS и приложения, а также шаги, после которых возникла проблема.",
    safeTitle: "Берегите свои данные", safeText: "Не отправляйте пароли, коды входа, платёжные данные и другую конфиденциальную информацию.",
    noteLabel: "ЛИЧНО ОТ ПАВЛА", noteText: "Я читаю каждое сообщение сам и постараюсь вам помочь.",
    letsTalk: "НАПИШИТЕ МНЕ", contactTitle: "Написать<br />сообщение<span class=\"period\">.</span>",
    contactCopy: "Есть вопрос, идея или что-то не работает? Напишите мне — я отвечу, как только смогу.",
    formTitle: "ОБРАЩЕНИЕ В ПОДДЕРЖКУ", nameLabel: "Ваше имя", optional: "НЕОБЯЗАТЕЛЬНО", emailLabel: "Ваш email", emailPlaceholder: "name@example.com", appLabel: "Приложение", anotherApp: "Другое приложение",
    messageLabel: "Сообщение", messagePlaceholder: "Опишите проблему…", sendButton: "ОТПРАВИТЬ СООБЩЕНИЕ",
    formNote: "Ваш email, выбранное приложение, сообщение и имя (если указано) будут отправлены через FormSubmit на мою почту поддержки. Не указывайте пароли и платёжные данные.",
    formSending: "ОТПРАВКА…", formSent: "Сообщение отправлено. Я отвечу на указанный email.",
    formFailed: "Не удалось отправить сообщение. Попробуйте ещё раз или напишите на kiorpavlo@gmail.com.",
    formActivation: "Форма ожидает одноразового подтверждения владельцем сайта. Пока что напишите на kiorpavlo@gmail.com.",
    footerPrivacy: "Политика конфиденциальности", footerEmail: "Эл. почта",
    privacyKicker: "КОНФИДЕНЦИАЛЬНОСТЬ", lastUpdated: "ОБНОВЛЕНО 3 НОЯБРЯ 2026 Г.",
    privacyTitle: "Политика<br />конфиден<wbr />циальности<span class=\"period\">.</span>",
    privacyIntro: "В этой политике описано, как Павло Киор обрабатывает информацию при посещении сайта поддержки и использовании разработанных мной приложений. Применяются только разделы, относящиеся к используемым вами функциям. Практики Fat Alien описаны отдельно ниже.",
    privacyQuestion: "ВОПРОСЫ О КОНФИДЕНЦИАЛЬНОСТИ?", emailPavlo: "НАПИСАТЬ ПАВЛУ", onThisPage: "НА ЭТОЙ СТРАНИЦЕ",
    tocResponsible: "Ответственный за данные", tocWebsite: "Сайт поддержки", tocUse: "Как используется информация",
    tocProviders: "Поставщики услуг", tocRetention: "Хранение и сроки", tocChoices: "Ваш выбор и удаление",
    tocChildren: "Дети и связь", tocProviderPolicies: "Правила провайдеров",
    sectionResponsible: "Ответственный за данные",
    pResponsible: "Павло Киор отвечает за персональные данные, которые получает напрямую, например когда вы обращаетесь в поддержку. Напишите на",
    sectionWebsite: "Информация на сайте поддержки",
    pWebsite: "Сайт поддержки — статический сайт. При размещении на GitHub Pages GitHub может сохранять IP-адреса посетителей и технические сведения о запросах для работы сайта и безопасности. На сайте нет учетных записей, рекламы, аналитики и файлов cookie, добавленных мной. При отправке формы ваш email, выбранное приложение и сообщение, а также имя, если вы его указали, передаются через FormSubmit на мою почту поддержки, чтобы я мог ответить. FormSubmit обрабатывает данные по своим правилам конфиденциальности и хранит отправленные формы до 30 дней.",
    sectionFatAlien: "Fat Alien: данные и разрешения устройства",
    pFatAlien1: "В зависимости от выбранных функций Fat Alien хранит на устройстве такие сведения, как идентификатор учетной записи и способ входа (Apple или Google), адрес электронной почты, если его передал провайдер входа, данные профиля (например, имя или псевдоним, дата рождения, пол, рост и аватар), записи дневника питания, пищевую ценность, пользовательские продукты и рецепты, цели, показатели веса и процента жира, а также настройки приложения.",
    pFatAlien2: "Если включить синхронизацию iCloud, данные приложения синхронизируются с вашей личной закрытой базой CloudKit, связанной с Apple Account. iCloud обслуживает Apple; данные обрабатываются по условиям и политике Apple. С разрешения пользователя приложение может использовать HealthKit: считывать активную и базовую энергию, вес и процент жира, а также записывать вес и процент жира в приложение «Здоровье». Доступ к HealthKit необязателен. При включенной синхронизации данные приложения могут передаваться в вашу базу iCloud; отдельного сервера для медицинских данных у меня нет.",
    pFatAlien3: "При поиске продукта по штрихкоду Fat Alien отправляет этот код в Open Food Facts, чтобы получить сведения о продукте. Запрос также передает сервису обычные сетевые данные, например IP-адрес. Данные входа или дневник питания в такой запрос не включаются. Распознавание текста с этикетки выполняется на устройстве; изображения этикеток эта функция не отправляет на мой сервер.",
    sectionUse: "Как используется информация",
    pUse: "Информация используется для работы выбранных вами функций, сохранения и восстановления данных приложения, синхронизации при включенном iCloud, поиска по штрихкоду и ответа на обращения в поддержку. В проверенном исходном коде Fat Alien нет сторонних SDK для рекламы или аналитики. Я не продаю персональные данные.",
    sectionProviders: "Поставщики услуг и другие получатели",
    pProviders: "Информация передается только сервисам, необходимым для выбранных функций: Apple — для входа через Apple, iCloud/CloudKit и HealthKit; Google — если вы выберете вход через Google; Open Food Facts — для поиска по штрихкоду; GitHub Pages — для размещения сайта; FormSubmit — для обработки обращений из формы и пересылки их на мою почту поддержки. Эти сервисы обрабатывают данные по собственным правилам конфиденциальности. Я не передаю данные приложений рекламодателям.",
    sectionRetention: "Хранение и сроки",
    pRetention: "Данные приложений хранятся локально на устройстве. При включённой синхронизации iCloud записи хранятся в вашей закрытой базе CloudKit. FormSubmit хранит обращения из формы до 30 дней; я храню переписку столько, сколько нужно для ответа и разумного учёта или соблюдения требований закона. GitHub Pages обрабатывает технические журналы сайта по своим правилам.",
    sectionChoices: "Ваш выбор, доступ и удаление данных",
    pChoices1: "Вы можете отказаться от необязательного доступа к камере, HealthKit или iCloud, а синхронизацию iCloud можно отключить в приложении. Вы можете написать мне с вопросом о данных из переписки с поддержкой или воспользоваться правами на конфиденциальность, предусмотренными в вашей стране.",
    pChoices2: "Текущая версия Fat Alien позволяет выйти из аккаунта и экспортировать данные, но в ней нет полного удаления аккаунта и связанных данных CloudKit прямо из приложения. Выход или удаление приложения не обязательно удаляет синхронизированные записи iCloud. Чтобы запросить помощь с удалением, напишите мне; для удаления данных из iCloud также могут потребоваться действия в настройках Apple Account или iCloud. Это ограничение указано, чтобы политика соответствовала текущим функциям приложения.",
    pChoices3: "Если вы находитесь в ЕЭЗ или Великобритании, у вас могут быть права запросить доступ, исправление, удаление, ограничение обработки или перенос данных, возразить против некоторых способов обработки и отозвать согласие, если обработка основана на нем. Вы также можете обратиться в местный орган по защите данных.",
    sectionChildren: "Дети, изменения и связь",
    pChildren1: "Fat Alien может запросить дату рождения, чтобы персонализировать цели питания. Родитель или опекун, обеспокоенный обработкой данных ребенка, может связаться со мной. Я могу обновлять эту политику при изменении функций или практик обработки; дата выше указывает последнее обновление.",
    pChildren2: "По вопросам конфиденциальности или для запросов напишите на",
    pChildren3: "Не отправляйте пароли, коды входа и лишние конфиденциальные сведения.",
    sectionProviderPolicies: "Политики конфиденциальности и условия сервисов-провайдеров",
    applePrivacy: "Конфиденциальность Apple ↗", googlePrivacy: "Конфиденциальность Google ↗", formSubmitPrivacy: "Конфиденциальность FormSubmit ↗",
    githubPrivacy: "Конфиденциальность GitHub ↗", offTerms: "Условия Open Food Facts ↗"
  }
};

const supplementalTranslations = window.extraTranslations || {};
const translations = Object.fromEntries(
  [...new Set([...Object.keys(baseTranslations), ...Object.keys(supplementalTranslations)])].map((language) => [
    language,
    {...(baseTranslations[language] || {}), ...(supplementalTranslations[language] || {})}
  ])
);

function applyLanguage(language) {
  currentLanguage = Object.prototype.hasOwnProperty.call(translations, language) ? language : 'en';
  const dictionary = translations[currentLanguage] || translations.en;
  document.documentElement.lang = currentLanguage;
  if (languageSelect) languageSelect.value = currentLanguage;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (value) element.placeholder = value;
  });
  document.querySelectorAll('a[href^="index.html"], a[href^="privacy.html"], a[href^="apps.html"]').forEach((link) => {
    const [pathAndQuery, hash] = link.getAttribute('href').split('#');
    const [path, query = ''] = pathAndQuery.split('?');
    const linkParams = new URLSearchParams(query);
    linkParams.set('lang', currentLanguage);
    link.href = path + '?' + linkParams.toString() + (hash ? '#' + hash : '');
  });
  document.title = pageName === 'privacy' ? dictionary.privacyDocumentTitle : pageName === 'apps' ? dictionary.appsDocumentTitle : dictionary.supportDocumentTitle;
  if (languageSelect) languageSelect.setAttribute('aria-label', dictionary.languageLabel || 'Language');
  if (menuButton) menuButton.setAttribute('aria-label', dictionary.menuOpen || 'Open navigation');
  const mailLinks = document.querySelectorAll('a[href^="mailto:kiorpavlo@gmail.com"]');
  const subject = pageName === 'privacy' ? dictionary.privacySubject : dictionary.supportSubject;
  mailLinks.forEach((link) => { link.href = 'mailto:kiorpavlo@gmail.com?subject=' + encodeURIComponent(subject); });
  const params = new URLSearchParams(location.search);
  params.set('lang', currentLanguage);
  history.replaceState(null, '', location.pathname + '?' + params.toString() + location.hash);
}

applyLanguage(new URLSearchParams(location.search).get('lang'));
const appSelect = document.querySelector('#app');
const requestedApp = new URLSearchParams(location.search).get('app');
if (appSelect && requestedApp && Array.from(appSelect.options).some((option) => option.value === requestedApp)) appSelect.value = requestedApp;
languageSelect?.addEventListener('change', (event) => applyLanguage(event.target.value));

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    const dictionary = translations[currentLanguage] || translations.en;
    menuButton.setAttribute('aria-label', isOpen ? (dictionary.menuOpen || 'Open navigation') : (dictionary.menuClose || 'Close navigation'));
    nav.classList.toggle('is-open', !isOpen);
  });
}

const supportForm = document.querySelector('#support-form');
const formMessage = document.querySelector('#form-message');

if (supportForm) {
  const sentParams = new URLSearchParams(location.search);
  if (sentParams.get('sent') === '1' && formMessage) {
    const dictionary = translations[currentLanguage] || translations.en;
    formMessage.textContent = dictionary.formSent || 'Your message was sent.';
    sentParams.delete('sent');
    history.replaceState(null, '', location.pathname + (sentParams.toString() ? '?' + sentParams.toString() : '') + location.hash);
  }

  supportForm.addEventListener('submit', () => {
    const values = new FormData(supportForm);
    const email = String(values.get('email') || '').trim();
    const selectedApp = String(values.get('app') || 'Fat Alien');
    const dictionary = translations[currentLanguage] || translations.en;
    const app = selectedApp === 'Another app' ? (dictionary.anotherApp || selectedApp) : selectedApp;
    supportForm.querySelector('#form-reply-to').value = email;
    supportForm.querySelector('#form-subject').value = (dictionary.supportSubject || 'App support') + ' — ' + app;
    const returnUrl = new URL(location.href);
    returnUrl.searchParams.set('lang', currentLanguage);
    returnUrl.searchParams.set('app', selectedApp);
    returnUrl.searchParams.set('sent', '1');
    returnUrl.hash = 'contact';
    supportForm.querySelector('#form-next').value = returnUrl.toString();
  });
}
