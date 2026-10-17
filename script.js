const translations = {
  en: {
    nav: ['Services', 'Approach', 'Your first visit'],
    headerCta: 'Book a session <span>↗</span>',
    eyebrow: 'Massage · cupping · acupuncture',
    heroTitle: 'Feel lighter.<br><em>Feel like yourself.</em>',
    heroIntro: 'Thoughtful, hands-on care to ease tension, restore your energy and help you feel at home in your body again.',
    heroButton: 'Choose a treatment <span>→</span>', heroLink: 'Explore services <span>↓</span>',
    trust: 'Trusted by more than<br><b>120 clients</b>', sideNote: 'Personal care.<br>At your pace.', artCaption: 'Care<br>for your body',
    statement: 'Wellbeing is more than being free from pain.<br>It is <em>the freedom to move, breathe and live</em> at your own pace.',
    photos: ['Time to restore', 'Gentle care for your body'],
    servicesEyebrow: 'Treatments', servicesTitle: 'Care you<br>can feel.', servicesLead: 'We will choose the right treatment and level of pressure for your needs and how you feel.',
    cards: [
      ['Massage', 'Classic, relaxing or sports massage to ease tension and bring movement back to your body.', 'Explore treatment'],
      ['Cupping therapy', 'A gentle technique to support circulation, ease muscle tension and help you feel lighter.', 'Explore treatment'],
      ['Acupuncture', 'A focused, thoughtful practice to support your wellbeing and restore balance.', 'Explore treatment']
    ],
    approachEyebrow: 'My approach', approachTitle: 'More than easing<br>a symptom — <em>understanding<br>what your body needs.</em>',
    approachText: 'At your first visit, we will talk through your goals, daily routine and how you feel. I will then suggest a suitable treatment and explain how to support the results.',
    points: ['Gentle work, without pain or strain', 'Techniques chosen for how you feel', 'Simple guidance to use at home'], artWords: 'Gentle<br>and focused',
    processEyebrow: 'Your first visit', processTitle: 'What to expect',
    steps: [['A conversation', 'We discuss how you feel, what you need and any relevant health concerns.'], ['Your treatment', 'We work together at a pace and pressure that feel comfortable for you.'], ['Ongoing care', 'You leave with simple suggestions to help maintain the benefits.']],
    bookingEyebrow: 'Book a session', bookingTitle: 'Make a little<br>time for <em>you.</em>', bookingText: 'Please contact me via WhatsApp to discuss your needs and arrange a suitable time.', call: 'Call directly', address: 'Address', map: 'Open map',
    labels: ['Your name', 'Phone or messaging app', 'What are you interested in?'], namePlaceholder: 'What should I call you?', contactPlaceholder: '+353 ___ ___ ____',
    options: ['Choose a treatment', 'Massage', 'Cupping therapy', 'Acupuncture', 'I would like a consultation'], submit: 'Send enquiry <span>→</span>', note: 'By submitting, you agree to the processing of your information.',
    footerDesc: 'Massage and restorative treatments',
    success: 'Thank you! Your enquiry has been received. I will be in touch soon.'
  }
};

function setLanguage(lang) {
  const en = lang === 'en';
  document.documentElement.lang = lang;
  document.title = en ? 'Goldsterapy — massage and restorative care' : 'Goldsterapy — массаж и восстановление';
  document.querySelector('meta[name="description"]').content = en
    ? 'Goldsterapy — massage, cupping therapy and acupuncture in Dublin.'
    : 'Goldsterapy — массаж, вакуумные банки и иглорефлексотерапия в Дублине.';
  document.querySelectorAll('.lang-button').forEach(button => button.classList.toggle('active', button.dataset.lang === lang));
  if (!en) {
    document.querySelector('.booking>div>p:not(.eyebrow)').textContent = 'Свяжитесь со мной, пожалуйста, через WhatsApp, чтобы обсудить ваши пожелания и выбрать удобное время.';
    document.querySelector('.contact-phone span').textContent = 'Позвонить напрямую';
    document.querySelector('.whatsapp-note').textContent = '«Пожалуйста, свяжитесь со мной через WhatsApp».';
    document.querySelector('footer p').textContent = 'Массаж и практики восстановления';
    return;
  }
  const t = translations.en;
  const put = (selector, value) => { const node = document.querySelector(selector); if (node) node.innerHTML = value; };
  document.querySelectorAll('.nav a').forEach((node, i) => node.textContent = t.nav[i]);
  put('.header-cta', t.headerCta); put('.hero .eyebrow', `<span></span> ${t.eyebrow}`); put('h1', t.heroTitle);
  put('.intro', t.heroIntro); put('.hero-actions .button', t.heroButton); put('.hero-actions .text-link', t.heroLink); put('.trust p', t.trust); put('.hero-side-note', t.sideNote); put('.art-caption p', t.artCaption);
  put('.statement p', t.statement); document.querySelectorAll('.photo-strip figcaption').forEach((n,i) => n.textContent = t.photos[i]);
  put('.services .eyebrow', `<span></span> ${t.servicesEyebrow}`); put('.section-heading h2', t.servicesTitle); put('.section-lead', t.servicesLead);
  document.querySelectorAll('.service-card').forEach((card,i) => { const row=t.cards[i]; card.querySelector('h3').textContent=row[0]; card.querySelector('p').textContent=row[1]; card.querySelector('a').innerHTML=`${row[2]} <span>→</span>`; });
  put('.approach .eyebrow', `<span></span> ${t.approachEyebrow}`); put('.approach h2', t.approachTitle); put('.approach-copy>p:not(.eyebrow)', t.approachText); document.querySelectorAll('.points span').forEach((n,i)=>n.textContent=t.points[i]); put('.approach-art p',t.artWords);
  put('.process .eyebrow', `<span></span> ${t.processEyebrow}`); put('.process h2',t.processTitle); document.querySelectorAll('.steps>div').forEach((n,i)=>{n.querySelector('h3').textContent=t.steps[i][0];n.querySelector('p').textContent=t.steps[i][1];});
  put('.booking .eyebrow', `<span></span> ${t.bookingEyebrow}`); put('.booking h2',t.bookingTitle); put('.booking>div>p:not(.eyebrow)',t.bookingText); put('.contact-phone span',t.call); put('.whatsapp-note', '“Please contact me via WhatsApp.”'); put('.address-label',t.address); put('.map-link',`${t.map} <span>↗</span>`);
  document.querySelectorAll('.booking-form label').forEach((n,i)=>{ const input=n.querySelector('input'); n.firstChild.textContent=t.labels[i]; if(input) input.placeholder=i===0?t.namePlaceholder:t.contactPlaceholder; });
  document.querySelector('#booking-form select').innerHTML=t.options.map(item=>`<option>${item}</option>`).join('');
  put('.booking-form .button',t.submit); put('.form-note',t.note); put('footer p',t.footerDesc);
  document.querySelector('.footer-phone').setAttribute('aria-label','Call Goldsterapy');
}

document.querySelectorAll('.lang-button').forEach(button => button.addEventListener('click', () => {
  const lang = button.dataset.lang;
  if (lang === 'ru') {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', 'ru');
    window.location.href = url.toString();
  } else {
    const url = new URL(window.location.href);
    url.searchParams.delete('lang');
    window.history.replaceState({}, '', url.toString());
    setLanguage('en');
  }
}));

if (new URLSearchParams(window.location.search).get('lang') === 'ru') {
  setLanguage('ru');
} else {
  setLanguage('en');
}
